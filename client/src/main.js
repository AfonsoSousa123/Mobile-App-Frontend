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

import login from './components/Auth/Login';
import signup from './components/Auth/SignUp';
import menu from './components/Menu/BottomMenu';

const router = new IonicVueRouter({
    mode: "history",
    routes: [
        { path: "/", redirect: "/default" },

        {
            path: "/default",
            name: "default",
            component: () =>
                import ( /* webpackChunkName: "home" */ "@/components/Menu/BottomMenu.vue"),
            children: [{
                    path: "/login",
                    name: "Login",
                    components: {
                        Login: () =>
                            import ( /* webpackChunkName: "tab2" */ "@/components/Auth/Login.vue")
                    }
                },
                {
                    path: "/signup",
                    name: "SignUp",
                    components: {
                        SignUp: () =>
                            import ( /* webpackChunkName: "tab3" */ "@/components/Auth/SignUp.vue")
                    }
                },
                {
                    path: "/home",
                    name: "Home",
                    components: {
                        Home: () =>
                            import ( /* webpackChunkName: "tab3" */ "@/components/Home/Home.vue")
                    }
                },
                {
                    path: "/search",
                    name: "Search",
                    components: {
                        Search: () =>
                            import ( /* webpackChunkName: "tab3" */ "@/components/Search/Search.vue")
                    }
                },
                {
                    path: "/profile",
                    name: "Profile",
                    components: {
                        Profile: () =>
                            import ( /* webpackChunkName: "tab3" */ "@/components/Profile/Profile.vue")
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