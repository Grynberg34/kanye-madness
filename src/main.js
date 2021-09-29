import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import Meta from 'vue-meta';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { store } from './store';


Vue.use(BootstrapVue);
Vue.use(Meta);
Vue.use(Vuex);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')