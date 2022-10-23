import React from 'react';
import { NavLink } from 'react-router-dom';
import { BRAND_LOGO, NAV_LINKS, PROJECT_GITHUB_LINK, PROJECT_TELEGRAM_LINK } from '../../core/consts';
import { l } from '../../core/localization';
import packageJson from '../../../package.json';
import './index.scss';

export default function Header() {
    return (
        <header className='navbar navbar-expand-lg navbar-dark sticky-top bg-dark'>
            <div className='container-xxl bd-gutter flex-wrap flex-lg-nowrap'>
                <NavLink to='/' className={'navbar-brand'}>
                    <img src={BRAND_LOGO as unknown as string} alt='Logo' width='52' height='52' className='d-inline-block align-text-center' />
                    <strong>{l('Brand name')}</strong>
                </NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='offcanvas offcanvas-end text-bg-dark flex-grow-1' tabIndex={-1} id='navbarNav' aria-labelledby='navbarNavLabel'>
                    <div className='offcanvas-header'>
                        <h5 className='offcanvas-title' id='navbarNavLabel'>{l('Menu')}</h5>
                        <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas' aria-label='Close'></button>
                    </div>
                    <div className='offcanvas-body'>
                        <hr className='d-lg-none text-white-50' />

                        <ul className='navbar-nav flex-row flex-wrap bd-navbar-nav'>
                            {
                                NAV_LINKS.map(({ path, locKey, enabled }, index) => enabled && <li className='nav-item col-12 col-lg-auto' key={index} data-bs-dismiss='offcanvas' data-bs-target='#navbarNav'>
                                    <NavLink to={path} className='nav-link py-2 px-0 px-lg-2'>{l(locKey)}</NavLink>
                                </li>)
                            }
                        </ul>

                        <hr className='d-lg-none text-white-50' />

                        <ul className='navbar-nav justify-content-end flex-row flex-grow-1 pe-3'>
                            <li className='nav-item col-2 col-lg-auto'>
                                <a className='nav-link disabled fs-6 nav-link-version' href='#'>v{packageJson.version}</a>
                            </li>
                            <li className='nav-item col-2 col-lg-auto'>
                                <a className='nav-link py-2 px-0 px-lg-2' href={PROJECT_GITHUB_LINK} rel='noopener'>
                                    <i className='fa-brands fa-github fa-xl'></i>
                                </a>
                            </li>

                            <li className='nav-item col-2 col-lg-auto'>
                                <a className='nav-link py-2 px-0 px-lg-2' href={PROJECT_TELEGRAM_LINK} rel='noopener'>
                                    <i className='fa-brands fa-telegram fa-xl'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
