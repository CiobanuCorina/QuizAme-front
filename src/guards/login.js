import router from "@/routes";
import store from "@/store";

router.beforeEach((to, from, next) => {
    if(store.getters['auth/getIsAuthorised'] && to.matched[0].path.includes('auth')) {
        next({
            path: '/'
        })
    }
    next();
})