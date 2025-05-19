const routesData = (state) => {
    return state.routeLinks;
}

const stacksDataHolder = (state) => {
    return state.stacksData;
}

const projectsDataHolder = state => state.projectsData;

export {routesData, stacksDataHolder, projectsDataHolder};