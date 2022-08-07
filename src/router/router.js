import { createRouter, createWebHistory } from "vue-router";
//import i18n from "@/i18n/i18n";

const routes = [
    {
        path: "/",
        name: "home",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;