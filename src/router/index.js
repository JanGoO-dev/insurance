import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AuthRegister from "../views/AuthRegister";
import AuthLogin from "../views/AuthLogin";
import PlanDetails from "../views/PlanDetails";
import Dashboard from "../views/Dashboard";
import Profile from "../views/Profile";

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
  {
    path: "/plan/:id",
    name: "PlanDetails",
    component: PlanDetails,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/profile/:user",
    name: "User Profile Page",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 });
      }, 100);
    });
  },
});

export default router;
