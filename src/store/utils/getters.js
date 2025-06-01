const routesData = state => state.routeLinks;
const stacksDataHolder = state => state.stacksData;
const projectDataKeys = state => state.projectKeys;
const projectDataContents = state => state.projectContents;
const isSlideCurrentValue = state => state.isSlideNavShow;
const personalProjectsHandler = state => state.personalProjects;
const desktopRefHandler = state => state.animationTrackers.desktopView;
const phoneRefHandler = state => state.animationTrackers.phoneView;
const isSidebarStatus = state => state.isShowSidebar;

export {routesData, stacksDataHolder, projectDataKeys, projectDataContents, isSlideCurrentValue, personalProjectsHandler, desktopRefHandler, phoneRefHandler, isSidebarStatus};