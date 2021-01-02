import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import router from './router'
import VueAxios from "vue-axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss'
import store from './store/store'
import * as echarts from 'echarts'
// require('./mock')

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
/**
 * 在这里注册，则所有组件都可以通过this.$访问
 */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app');
