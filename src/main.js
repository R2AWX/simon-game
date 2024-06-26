import Vue from "vue";
import App from "./App.vue";
import "./assets/style.css";

Vue.config.productionTip = false;

Vue.config.devtools = true;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
