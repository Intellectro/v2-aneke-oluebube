const isSlider = (state, isSlider) => {
    return state.isSlideNavShow = isSlider;
}

const isAnimateMutated = (state, elem) => {
    if (!elem) {
        return Object.assign(state, {isAnimatedTracker: elem});
    }
    return state.isAnimatedTracker = elem;
}

export {isSlider, isAnimateMutated};