import { createRouter, createWebHistory } from "vue-router";
import View from "../views/View.vue";
import { Archive, Projects, NotYetDone } from "../pages";

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
    },
    {
        path: "/:pathMatch(.*)*",
        name: "underconstruction",
        component: NotYetDone
    }
];


const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
});

export default router;