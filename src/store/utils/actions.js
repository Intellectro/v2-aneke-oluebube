const isSlideNavHandler = ({commit}, isSlide) => {
    return commit("isSlider", isSlide);
}

const isAnimateTrackerHandler = ({commit}, elem) => {
    if (elem) {
        return commit("isAnimateMutated", elem);
    }
    return commit("isAnimateMutated", null);
}

export {isSlideNavHandler, isAnimateTrackerHandler};