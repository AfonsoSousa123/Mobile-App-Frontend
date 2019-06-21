import Vue from "vue";
import App from "./App.vue";

import Ionic from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

Vue.config.productionTip = false;

import { IonicVueRouter } from "@ionic/vue";
Vue.use(IonicVueRouter);

// import VueRouter from "vue-router";
// Vue.use(VueRouter);
Vue.use(Ionic);

const router = new IonicVueRouter({
    mode: "history",
    routes: [
        { path: "/", redirect: "/default" },

        {
            path: "/default",
            name: "default",
            component: () =>
                import ( /* webpackChunkName: "bottomNav" */ "@/components/Menu/BottomMenu.vue"),
            children: [{
                    path: "/login",
                    name: "Login",
                    components: {
                        Login: () =>
                            import ( /* webpackChunkName: "Login" */ "@/components/Auth/Login.vue")
                    }
                },
                {
                    path: "/signup",
                    name: "SignUp",
                    components: {
                        SignUp: () =>
                            import ( /* webpackChunkName: "Signup" */ "@/components/Auth/SignUp.vue")
                    }
                },
                {
                    path: "/home",
                    name: "Home",
                    components: {
                        Home: () =>
                            import ( /* webpackChunkName: "Home" */ "@/components/Home/Home.vue")
                    }
                },
                {
                    path: "/search",
                    name: "Search",
                    components: {
                        Search: () =>
                            import ( /* webpackChunkName: "Search" */ "@/components/Search/Search.vue")
                    }
                },
                {
                    path: "/profile",
                    name: "Profile",
                    components: {
                        Profile: () =>
                            import ( /* webpackChunkName: "Porfile" */ "@/components/Profile/Profile.vue")
                    }
                },
                {
                    path: "/create/post",
                    name: "createPost",
                    components: {
                        createPost: () =>
                            import ( /* webpackChunkName: "Create" */ "@/components/Posts/Create.vue")
                    }
                }
            ]
        }
    ]
});
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");