/**
 * Copyright (c) Bohdan Shtepan.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

class MemoryCache {
    private _store: Map<string, any>;

    constructor() {
        this._store = new Map();
    }

    get<Type>(key: string): Type | undefined {
        return this._store.get(key);
    }

    has(key: string): boolean {
        return this._store.has(key);
    }

    put<Type>(key: string, val: Type): MemoryCache {
        this._store.set(key, val);

        return this;
    }

    remove(key: string): boolean {
        return this._store.delete(key);
    }
};

const cache = new MemoryCache();

export default cache;
