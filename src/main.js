import BootstrapVue3 from 'bootstrap-vue-3'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '@/assets/css/procurement.css'
import router from './router'
import store from './store'

createApp(App).use(BootstrapVue3).use(store).use(router).mount('#app')
