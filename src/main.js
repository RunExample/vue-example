import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// store 全局变量 vuex

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
