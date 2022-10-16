/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from 'react';

const useSetState = (initial: any[]) => {
    const [set, setSet] = useState(new Set(initial))

    return {
        add: el =>
            setSet((set) => {
                if (set.has(el)) return set
                set.add(el)
                return new Set(set)
            }),
        delete: el => {
            setSet((set) => {
                if (!set.has(el)) return set
                set.delete(el)
                return new Set(set)
            })
        },
        has: el => set.has(el),
        clear: () => setSet(new Set()),
        [Symbol.iterator]: () => set.values(),
        forEach: (fn) => set.forEach(fn),
        keys: () => set.keys(),
        values: () => set.values(),
        get size() {
            return set.size
        }

    }
};

export default useSetState;
