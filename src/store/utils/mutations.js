const isSlider = (state, isSlider) => {
    return state.isSlideNavShow = isSlider;
}

const desktopTrackMutate = (state, elem) => {
    return Object.assign(state.animationTrackers, {desktopView: elem});
}

const phoneTrackMutate = (state, elem) => {
    return Object.assign(state.animationTrackers, {phoneView: elem});
}

export {isSlider, desktopTrackMutate, phoneTrackMutate};