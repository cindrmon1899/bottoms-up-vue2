import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import VueCryptojs from "vue-cryptojs";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;

Vue.use(VueCryptojs);
Vue.use(VueMeta);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
