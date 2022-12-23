import { createRouter, createWebHistory } from 'vue-router'
import Courses from "../views/Courses.vue";
import AboutView from "../views/AboutView.vue";
import Semester from "../views/Semester.vue";

const routes = [{
        path: '/',
        name: 'Courses',
        component: Courses,
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
    },
    { //will route to AllPosts view if none of the previous routes apply
        path: "/:catchAll(.*)",
        name: "courses",
        component: Courses,
    },
    {
        path: '/semesters/:fall',
        name: 'Semester2',
        component: Semester,
    },
    {
        path: '/semesters/:spring',
        name: 'Semester',
        component: Semester,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router