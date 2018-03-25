import Vue from 'vue'
import App from './App'
import router from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/home/css/style.css'
import 'element-ui/lib/index.js'
import axios from 'axios'
import IycmsHeader from './public/IycmsHeader'
import IycmsFooter from './public/IycmsFooter'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.component('IycmsHeader',IycmsHeader);
Vue.component('IycmsFooter',IycmsFooter);
window.vue = new Vue({
  el: '#app',
  data:{
    abc:123
  },
  router,
  template: '<App/>',
  components: { App }
})