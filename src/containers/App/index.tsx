/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Footer, Header, SocialBanner } from '../../components';
import { Outlet } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return (
            <>
                <SocialBanner />
                <Header />
                <Outlet />
                <Footer />
            </>
        );
    }
};
