import VueRouter from 'vue-router';
import Routes from './routes/routes';
import Vue from 'vue'
import App from './App.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
