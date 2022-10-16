/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { SOCIAL_BANNER_DONATE_LINK } from '../../core/consts';
import { l } from '../../core/localization';
import './index.scss';

export default function SocialBanner() {
    return (
        <header className='navbar navbar-dark sticky-top social-banner'>
            <div className='container-lg text-center'>
                <div className='row'>
                    <div className='col'>
                        <span>{l('Support Ukraine')}</span>
                        &nbsp;
                        <a className='link-info' href={SOCIAL_BANNER_DONATE_LINK} target='_blank'>{l('Support Ukraine2')}</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
