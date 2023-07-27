import { createApp } from 'vue'
import App from './App.vue'
import VueRellax from 'vue-rellax'

import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

import './assets/main.scss'

const app = createApp(App);
app.use(Quasar, {
    plugins:{}
});
app.use(VueRellax)
app.mount('#app')

