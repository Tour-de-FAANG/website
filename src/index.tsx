/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components';
import { App, CodingProblemsPage, HomePage, InterviewGuidePage, StudyGuidePage } from './containers';

import './index.scss';

const root = createRoot(document.getElementById('app'));

root.render(
    <HashRouter>
        <ScrollToTop>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='coding-problems' element={<CodingProblemsPage />} />
                    <Route path='study-guide' element={<StudyGuidePage />} />
                    <Route path='interview-guide' element={<InterviewGuidePage />} />
                </Route>
            </Routes>
        </ScrollToTop>
    </HashRouter>
);
