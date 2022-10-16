/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { BRAND_LOGO_OP10_512 } from '../../core/consts';

import './index.scss';

export default function Hero({ title }) {
    return (
        <section className='hero text-white'>
            <div className='container-lg' style={{ backgroundImage: `url(${BRAND_LOGO_OP10_512})` }}>
                <div className='row'>
                    <div className='col text-start'>
                        <h1 className='display-5'>{title}</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
