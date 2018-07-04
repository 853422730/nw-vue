import Vue from 'vue';
import MainPage from '../views/MainPage';
import router from "../router";
import store from "../store";

Vue.config.productionTip = false;

// for auto update
// import { checkUpdate } from '@/utils/update.js'
// checkUpdate();


global.deBug = process.env.NODE_ENV === 'development';

//系统托盘

// import req from '../utils/requestConfig';
// Vue.http = Vue.prototype.$http = req;

// import {Button} from 'element-ui';


/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  store,
  template: '<MainPage/>',
  components: { MainPage }
});


