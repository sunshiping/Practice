import Vue from 'vue'
import Router from 'vue-router'
import Record from './views/record/Record.vue'
import RecordDetail from './views/recordDetail/Detail.vue'
import Mine from './views/mine/Mine.vue'
import Qrcode from './views/qrcode/Qrcode.vue'
import NotFind from './views/layout/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'record',
      component: Record
    },
    {
      path: '/detail',
      name: 'detail',
      component: RecordDetail
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: Qrcode
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/404',
      name: 'notFind',
      component: NotFind
    },
    {
      path: '*',    // 此处需特别注意至于最底部
      redirect: '/404'
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
