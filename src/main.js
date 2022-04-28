// import VConsole from 'vconsole';
// const vconsole = new VConsole()

import { createApp } from 'vue'
import App from './app.vue'
import './index.css'

import Ethers from './plugins/ethers'
import Axios from './plugins/axios'
import Utils from './plugins/utils'
import Router from './router.js'
import Store from './store.js'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

// import Vconsole from 'vconsole'
// const vConsole = new Vconsole()

const app = createApp(App)
app.use(Axios)
app.use(Ethers)
app.use(Utils)
app.use(Router)
app.use(Store)
app.use(ElementPlus)
// app.use(vConsole)
app.mount('#app')
