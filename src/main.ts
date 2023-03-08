import { createApp } from 'vue'
import App from './App.vue'

import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'

import './assets/main.scss'

const app = createApp(App);
app.use(Quasar, {
    plugins:{}
});
app.mount('#app')

