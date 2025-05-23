import { createRouter, createWebHashHistory } from "vue-router";
import View from "../views/View.vue";
import { Archive, Projects } from "../pages";

const routes = [
    {
        path: "/",
        name: "home",
        component: View
    },
    {
        path: "/my/archive",
        name: "archive",
        component: Archive
    },
    {
        path: "/my/projects",
        name: "projects",
        component: Projects
    }
];


const router = createRouter({
    routes,
    history: createWebHashHistory(import.meta.env.BASE_URL)
});

export default router;