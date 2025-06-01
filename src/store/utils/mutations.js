const isSlider = (state, isSlider) => {
    return state.isSlideNavShow = isSlider;
}

const desktopTrackMutate = (state, elem) => {
    return Object.assign(state.animationTrackers, {desktopView: elem});
}

const phoneTrackMutate = (state, elem) => {
    return Object.assign(state.animationTrackers, {phoneView: elem});
}

const showSideNavbar = (state, value) => {
    return Object.assign(state, {isShowSidebar: value});
}

export {isSlider, desktopTrackMutate, phoneTrackMutate, showSideNavbar};