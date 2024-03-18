import { createApp } from 'vue'
import App from './App.vue'

import CarbonVue3 from '@carbon/vue';
import './assets/main.css'

const app = createApp(App);

app.use(CarbonVue3);
app.mount('#app');
