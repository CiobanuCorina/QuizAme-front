import Vue from "vue";
import VueRouter from 'vue-router'
import levelRoutes from '@/routes/level'
import authRoutes from '@/routes/auth'
import Dashboard from "@/views/Dashboard";
import LevelChoice from "@/views/LevelChoice";
import Quiz from "@/views/Quiz";
import Auth from "@/views/Auth";
import TimeoutPage from "@/views/TimeoutPage";
import ScorePage from "@/views/ScorePage";

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/questionnaires'},
    {path: '/questionnaires', component: Dashboard},
    {name: 'level', path: '/level', component: LevelChoice, children: levelRoutes, props: true},
    {name: 'quiz', path: '/quiz', component: Quiz, props: true},
    {name: 'auth', path: '/auth', component: Auth, children: authRoutes},
    {name: 'timeout', path: '/timeout', component: TimeoutPage},
    {name: 'congrats', path: '/congrats', component: ScorePage, props: true}
];

const router = new VueRouter({
    routes,
    mode: "history"
})

export default router;