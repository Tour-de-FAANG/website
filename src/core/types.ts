/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export interface Problem {
    code: number;
    name: string;
    url: string;
    level: number;
    freq: number;
}

export interface NavLink {
    path: string;
    locKey: string;
    enabled: boolean;
    description: string;
    actionButton: string;
    icon: string;
}

export interface Company {
    name: string;
    key: string;
}
