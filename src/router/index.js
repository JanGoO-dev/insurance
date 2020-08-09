import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AuthRegister from "../views/AuthRegister";
import AuthLogin from "../views/AuthLogin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Auth/Register",
    name: "Registaration",
    component: AuthRegister,
  },
  {
    path: "/Auth/Login",
    name: "Login",
    component: AuthLogin,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
