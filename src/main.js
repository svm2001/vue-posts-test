import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router.js";
import store from "./store/index.js";

import Vintersection from "./directives/Vintersection.js";
import VFocus from "./directives/VFocus.js";

const app = createApp(App)

app.directive('intersection', Vintersection)
app.directive('focus', VFocus)

app
    .use(router)
    .use(store)
    .mount('#app')