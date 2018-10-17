import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

const FastClick = require('fastclick')

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-CN',
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
