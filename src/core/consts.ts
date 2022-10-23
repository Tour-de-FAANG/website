/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Company, NavLink } from './types';
import { l } from './localization';

export const TITLE = 'Tour de FAANG';

export const BRAND_LOGO: URL = new URL('../assets/brand/logo.svg', import.meta.url),
    BRAND_LOGO_OP10_512: URL = new URL('../assets/brand/logo_op10_512.png', import.meta.url);

export const NAV_LINKS: NavLink[] = [{
    path: '/interview-guide',
    locKey: l('Interview Guide'),
    enabled: false,
    description: l('Interview Guide card description'),
    actionButton: l('Interview Guide card action button text'),
    icon: '🏅'
}, {
    path: '/study-guide',
    locKey: l('Study Guide'),
    enabled: false,
    description: l('Study Guide card description'),
    actionButton: l('Study Guide card action button text'),
    icon: '🧑‍🏫'
}, {
    path: '/coding-problems',
    locKey: 'Coding Problems',
    enabled: true,
    description: l('Coding Problems card description'),
    actionButton: l('Coding Problems card action button text'),
    icon: '🧮'
}];

export const COMPANIES_LIST: Company[] = [{
    name: 'Meta (Facebook)',
    key: 'meta'
}, {
    name: 'Amazon',
    key: 'amazon'
}, {
    name: 'Apple',
    key: 'apple'
}, {
    name: 'Netflix',
    key: 'netflix'
}, {
    name: 'Google',
    key: 'google'
}, {
    name: 'Microsoft',
    key: 'microsoft'
}, {
    name: 'Uber',
    key: 'uber'
}, {
    name: 'Lyft',
    key: 'lyft'
}, {
    name: 'Airbnb',
    key: 'airbnb'
}];

export const FOOTER_COPY_YEAR = new Date().getFullYear(),
    FOOTER_COPY_NAME = 'Bohdan Shtepan',
    FOOTER_COPY_LINK = 'https://modern-dev.com/';

export const PROJECT_GITHUB_LINK = 'https://github.com/Tour-de-FAANG',
    PROJECT_TELEGRAM_LINK = 'https://moderndev.t.me/',
    SOCIAL_BANNER_DONATE_LINK = 'https://war.ukraine.ua/donate/'/*,
    FAANG_INTERVIEW_TG_GROUP_LINK = 'https://t.me/faanginterview'*/;
