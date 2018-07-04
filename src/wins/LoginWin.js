import Vue from 'vue';
import LoginPage from '../views/LoginPage';

Vue.config.productionTip = false

// for auto update
// import { checkUpdate } from '@/utils/update.js'
// checkUpdate();

// import {Button} from 'element-ui';

/* eslint-disable no-new */
new Vue({
  el: '#login',
  template: '<LoginPage/>',
  components: { LoginPage }
})
