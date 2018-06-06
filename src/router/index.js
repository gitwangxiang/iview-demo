import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Iview from '@/components/Iview'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/iview',
      name: 'iview',
      component: Iview
    }
  ]
})
