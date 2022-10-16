/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TITLE } from './consts';

export const buildTitle = (title: string): string => {
    return `${title} — ${TITLE}`;
};

export const iftrue = (condition: boolean, truth: any, falsiness: any): any => {
    return condition ? truth : falsiness;
};
