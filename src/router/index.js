import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriesView from "../views/CategoriesView.vue";
import Login from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: {
      icon: "mdi-view-dashboard",
    },
  },
  {
    path: "/categories",
    name: "Categories",
    component: CategoriesView,
    props: {
      icon: "mdi-shape",
    },
  },
  {
    path: "/login",
    name: "LoginView",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
