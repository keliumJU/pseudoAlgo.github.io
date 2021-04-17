import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
Vue.config.productionTip = false;
new Vue({
  router,
  BootstrapVue,
  IconsPlugin,
  vuetify,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
