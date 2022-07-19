import Vue from "vue";
import VueRouter from "vue-router";
import AccueilView from "../views/AccueilView.vue";
import PrestationsView from "../views/PrestationsView.vue";
import ContactView from "../views/ContactView.vue";
import AProposView from "../views/AProposView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "accueil",
    component: AccueilView,
  },
  {
    path: "/prestations",
    name: "prestations",
    component: PrestationsView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/a-propos",
    name: "a-propos",
    component: AProposView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
