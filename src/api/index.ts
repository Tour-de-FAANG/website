/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import axios from 'axios';

export default axios.create({
    baseURL: 'https://raw.githubusercontent.com/Tour-de-FAANG/data/master/problems/'
});
