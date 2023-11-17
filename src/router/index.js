import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Artikel from "../views/Artikel.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
