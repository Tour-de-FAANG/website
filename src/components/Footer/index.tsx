/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { BRAND_LOGO, FOOTER_COPY_LINK, FOOTER_COPY_NAME, FOOTER_COPY_YEAR, NAV_LINKS } from '../../core/consts';
import { l } from '../../core/localization';

import './index.scss';

export default function Footer() {
    return (
        <section className='container-lg footer'>
            <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top row-cols-2 row-cols-md-3 mb-0'>
                <p className='col-8 col-md-4 mb-0 px-2 text-muted'>&copy; {FOOTER_COPY_YEAR} <a href={FOOTER_COPY_LINK} className='nav-link d-inline'>{FOOTER_COPY_NAME}</a></p>

                <a href='/' className='col-4 col-md-4 d-flex align-items-center justify-content-end justify-content-md-center me-md-auto link-dark text-decoration-none'>
                    <img src={BRAND_LOGO as unknown as string} className='bi me-2' width='42' height='42' alt={l('Logo')} />
                </a>

                <ul className='nav col-md-4 justify-content-end d-none d-md-flex'>
                    {
                        NAV_LINKS.map(({ enabled, path, locKey }, index) => enabled && <li className='nav-item' key={index}>
                            <NavLink to={path} className='nav-link px-2 text-muted'>{l(locKey)}</NavLink>
                        </li>)
                    }
                </ul>
            </footer>
        </section>
    );
}
