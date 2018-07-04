import Vue from 'vue'
import Router from 'vue-router'
import SummaryContainer from '@/components/containers/SummaryContainer';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/summary",
      component: SummaryContainer,
    },
    {
      path: '/',
      redirect: '/summary'
    }
  ]
})
