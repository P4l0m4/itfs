import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/global.scss";
import Vuelidate from "vuelidate";
import Particles from "particles.vue";

Vue.use(Vuelidate);
Vue.use(Particles);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
