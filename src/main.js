import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import Vuex from './store'
import Router from './router'

const app = createApp(App)
app.use(vuetify)
app.use(Vuex)
app.use(Router)
app.mount('#app')
