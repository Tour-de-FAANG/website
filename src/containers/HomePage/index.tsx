/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { sanitize } from 'dompurify';
import { Hero } from '../../components';
import { l } from '../../core/localization';
import { NAV_LINKS } from '../../core/consts';

import './index.scss';

export default function HomePage() {
    return (
        <>
            <Helmet bodyAttributes={{ class: 'home-page' }}>
                <title>{l('Home title')}</title>
            </Helmet>

            <Hero title={l('Home title')} subtitle={l('Home description')} textAlignemnt='text-center' />

            <section className='container-lg home'>
                <div className='row'>
                    <div className='col-12'>
                        <br />
                        <p dangerouslySetInnerHTML={{ __html: sanitize(l('Home 1st p')) }} />
                        <p dangerouslySetInnerHTML={{ __html: sanitize(l('Home 2nd p')) }} />
                        <br />
                    </div>

                    <div className='col-12 text-center'>
                        <h4 className='fs-3 f1w-light' dangerouslySetInnerHTML={{ __html: sanitize(l('Home 1st subtitle')) }} />
                        <br />
                    </div>
                </div>

                <div className='row row-cols-lg-3'>
                    {
                        NAV_LINKS.map(({ icon, locKey, description, enabled, path, actionButton }, idx) => <div className='col-12 my-2 col-sm-6 mx-sm-auto col-md-4 px-xl-0 px-xl-3 px-xxl-5' key={idx}>
                            <div className='card'>
                                <div className='card-img-top text-center py-5'>
                                    <span className='display-4'>{icon}</span>
                                </div>

                                <div className='card-body'>
                                    <h5 className='card-title'>➡️ {locKey}</h5>
                                    <p className='card-text'>{description}</p>
                                    <NavLink to={path} className={'btn btn-primary ' + (!enabled && 'disabled')}>
                                        {!enabled && <i className='fa-solid fa-lock'></i>}
                                        {' ' + actionButton}
                                    </NavLink>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

                <div className='row'>
                    <div className='col'>
                        <br />
                        <br />
                        <h4 className='fs-3 f1w-light text-center' dangerouslySetInnerHTML={{ __html: sanitize(l('Home 2nd subtitle')) }} />
                        <br />
                        <p dangerouslySetInnerHTML={{ __html: sanitize(l('Home 3rd p')) }} />
                    </div>
                </div>
            </section>
        </>
    );
}
