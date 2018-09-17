// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {
  faSpinner,
  faChevronUp,
  faChevronCircleDown,
  faChevronCircleRight,
  faSearch
} from "@fortawesome/fontawesome-free-solid";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.component("font-awesome-icon", FontAwesomeIcon);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
