import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/drinks/coffee",
    name: "Coffee",
    component: () => import("../views/drinks/Coffee.vue")
  },
  {
    path: "/drinks/tea",
    name: "Tea",
    component: () => import("../views/drinks/Tea.vue")
  },
  {
    path: "/drinks/shakes",
    name: "Shakes",
    component: () => import("../views/drinks/Shakes.vue")
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
