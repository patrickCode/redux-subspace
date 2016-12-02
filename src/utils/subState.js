/**
 * Copyright 2016, IOOF Holdings Limited.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const getSubState = (getState, mapState) => () => {
    let rootState = getState();
    let subState = mapState(rootState)

    if (subState && typeof subState === 'object' && !Array.isArray(subState)) {
        return { ...mapState(rootState), root: rootState.root || rootState }
    } else {
        return subState
    }
}