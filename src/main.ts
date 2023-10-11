import { createApp } from 'vue'
import router from '@router/index'
import Main from './Main.vue'
import store from '@store/index'


createApp(Main).use(router).use(store).mount('#app')