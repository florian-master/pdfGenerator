
import "bootstrap/dist/css/bootstrap.css"
import "./assets/styles/bootstrap.css"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);

library.add(fab, far, fas);

app.use(router);

app.component('fa', FontAwesomeIcon);

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"