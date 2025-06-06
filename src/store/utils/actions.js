const isSlideNavHandler = ({commit}, isSlide) => {
    return commit("isSlider", isSlide);
}

const desktopTrackHandler = ({commit}, elem) => {
    if (!elem) {
        commit("desktopTrackMutate", elem);
        return;
    }
    return commit("desktopTrackMutate", elem);
}

const phoneTrackHandler = ({commit}, elem) => {
    if (!elem) {
        commit("phoneTrackMutate", elem);
        return;
    }
    return commit("phoneTrackMutate", elem);
}

const showSideNavbarHandler = ({commit}, value) => {
    if (value) {
        commit("showSideNavbar", value);
        return;
    }

    commit("showSideNavbar", value);
}

export {isSlideNavHandler, desktopTrackHandler, phoneTrackHandler, showSideNavbarHandler};