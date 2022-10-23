/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Tooltip } from 'bootstrap';
import { get, set } from 'local-storage';
import { sanitize } from 'dompurify';
import { useSetState } from '../../hooks';
import { Hero } from '../../components';
import { COMPANIES_LIST } from '../../core/consts';
import { buildTitle, iftrue } from '../../core/helpers';
import { l } from '../../core/localization';
import { Problem } from '../../core/types';
import API from '../../api';
import cache from '../../core/cache';

import './index.scss';

const DEFAULT_PROBLEMS_SHOW_COUNT = 50,
    DEFAULT_PROBLEMS_SHOW_INCREASE = 50,
    CHECKED_PROBLEMS_LS_KEY = 'checked_problems';

export default function CodingProblemsPage() {
    const [problemsList, setProblemsList] = useState<Problem[]>([]),
        [showCount, setShowCount] = useState<number>(DEFAULT_PROBLEMS_SHOW_COUNT),
        [selectedCompany, setSelectedCompany] = useState<string>(null),
        [lastUpdateDate, setLastUpdateDate] = useState<number>(Date.now()),
        checkedProblems = useSetState(get(CHECKED_PROBLEMS_LS_KEY) || []),
        fetchProblemsList = async (compName: string) => {
            try {
                const resp = await API.get(`${compName}.json`);

                setLastUpdateDate(resp.data.date);

                return resp.data.problems.map(({ c, f, l, n, u }) => {
                    return {
                        code: c,
                        name: n,
                        url: u,
                        level: l,
                        freq: f
                    };
                });
            } catch {
                console.error('unable to get problems list');
            }

            return [];
        },
        showProblemsList = async (compName: string) => {
            if (compName === selectedCompany) {
                return;
            }

            const cacheKey = compName + '-problems';
            let problems: Problem[];

            setSelectedCompany(compName);
            setProblemsList([]);
            setShowCount(DEFAULT_PROBLEMS_SHOW_COUNT);

            if (cache.has(cacheKey)) {
                problems = cache.get<Problem[]>(cacheKey);
            } else {
                problems = await fetchProblemsList(compName);
                cache.put(cacheKey, problems);
            }

            setProblemsList(problems);
        },
        caseLevelName = (level: number): string => {
            switch (level) {
                case 0: return 'Hard';
                case 1: return 'Medium';
                case 2: return 'Easy';
            }
        },
        caseFreqName = (freq: number): string => {
            if (freq >= 66) {
                return 'high';
            }

            if (freq >= 33) {
                return 'medium';
            }

            return 'low';
        },
        onLoadMoreClick = () => {
            setShowCount(showCount + DEFAULT_PROBLEMS_SHOW_INCREASE);
        },
        onTabChange = (ev: Event) => {
            showProblemsList((ev.target as HTMLElement).dataset.company);
        },
        onProblemMarkChange = (code: number) => {
            if (checkedProblems.has(code)) {
                checkedProblems.delete(code);
            } else {
                checkedProblems.add(code);
            }

            set(CHECKED_PROBLEMS_LS_KEY, [...checkedProblems.values()]);
        };

    useEffect(() => {
        // Listen to tab change events.
        document.addEventListener('shown.bs.tab', onTabChange);

        // Preaload problems list for the first company.
        showProblemsList(COMPANIES_LIST[0].key);

        // Enable tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle=\'tooltip\']');
        [...tooltipTriggerList as unknown as Element[]].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));

        // Clenup hook.
        return () => {
            set(CHECKED_PROBLEMS_LS_KEY, [...checkedProblems.values()]);
        };
    }, [selectedCompany, checkedProblems]);

    return (
        <>
            <Helmet bodyAttributes={{ class: 'coding-problems-page' }}>
                <title>{buildTitle(l('Coding Problems'))}</title>
            </Helmet>

            <Hero title={l('Coding Problems title')} />

            <section className='container-lg'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <br />
                        <p dangerouslySetInnerHTML={{ __html: sanitize(l('Coding Problems description')) }}></p>
                        <br />
                    </div>
                    <div className='col-12 gx-0 gx-sm-4'>
                        <ul className='nav nav-tabs nav-fill' id='myTab'>
                            {
                                COMPANIES_LIST.map(({ name, key }, idx) => <li className='nav-item' key={idx}>
                                    <a className={`nav-link${!idx ? ' active' : ''}`} href='#' data-company={key} data-bs-toggle='tab'>
                                        <i className={`fa-brands fa-${key}`} /> {name}
                                    </a>
                                </li>)
                            }
                        </ul>

                        <table className='table table-striped table-bordered1 caption-top'>
                            <thead>
                                <tr>
                                    <th scope='col'></th>
                                    <th scope='col'>Problem</th>
                                    <th scope='col'>Difficulty</th>
                                    <th scope='col' className='d-none d-sm-table-cell'>Frequency</th>
                                </tr>
                            </thead>
                            <tbody className={'placeholder-glow' + iftrue(!!problemsList.length, ' d-none', '')}>
                                {
                                    new Array(10).fill(null).map((_, idx) => <tr key={idx}>
                                        <th>
                                            <span className='placeholder col-12'></span>
                                        </th>
                                        <td>
                                            <span className='placeholder col-12'></span>
                                        </td>
                                        <td>
                                            <span className='placeholder col-12'></span>
                                        </td>
                                        <td className='d-none d-sm-table-cell'>
                                            <span className='placeholder col-12'></span>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                            <tbody className={iftrue(!!problemsList.length, '', 'd-none')}>
                                {
                                    problemsList.slice(0, showCount).map(({ code, freq, url, level, name }: Problem, idx) => <tr key={idx}>
                                        <th scope='row'>
                                            <div>
                                                <input
                                                    className='form-check-input'
                                                    type='checkbox'
                                                    id={'problem' + code}
                                                    aria-label={name}
                                                    checked={checkedProblems.has(code)}
                                                    onChange={() => onProblemMarkChange(code)}
                                                    data-bs-toggle='tooltip'
                                                    data-bs-title={l('Toggle problem solved')} />
                                            </div>
                                        </th>
                                        <td>
                                            <a className='lc-problem-link' href={'https://leetcode.com' + url} target='_blank'>{`${code}.${name}`}</a>
                                        </td>
                                        <td className={`problem-level-${caseLevelName(level).toLowerCase()}`}>{caseLevelName(level)}</td>
                                        <td className='d-none d-sm-table-cell'>
                                            <div className='progress'>
                                                <div
                                                    className={`progress-bar problem-freq-${caseFreqName(freq)}`}
                                                    role='progressbar'
                                                    aria-label={`Problem ${code} frequency`}
                                                    aria-valuenow={freq}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ width: `${freq}%` }} />
                                            </div>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className={iftrue(!!problemsList.length && showCount < problemsList.length, 'col-12', 'd-none')}>
                        <div className='d-grid gap-2 col-xs-8 col-sm-6 col-md-4 mx-auto'>
                            <button
                                className='btn btn-outline-success'
                                type='button' onClick={onLoadMoreClick}
                                disabled={showCount >= problemsList.length}>
                                <i className='fa-solid fa-ghost'></i> {l('Load more')}
                            </button>
                        </div>
                    </div>

                    <div className={'col-12 text-center' + iftrue(!!problemsList.length, '', ' d-none')}>
                        <br />
                        <span>Problems count: <strong>{problemsList.length}</strong>. Last update: <strong>{
                            new Date(lastUpdateDate).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })
                        }</strong></span>
                    </div>
                </div>
            </section>
        </>
    );
}
