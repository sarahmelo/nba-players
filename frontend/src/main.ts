import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import 'material-symbols';
import { router } from './routes'

const app = createApp(App);
app.use(router);
app.mount('#app');
