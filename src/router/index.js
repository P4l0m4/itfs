import Vue from "vue";
import VueRouter from "vue-router";
// import AccueilView from "../views/AccueilView.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "accueil",
  //   component: AccueilView,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: "smooth",
  //     };
  //   }
  // },
});

export default router;
