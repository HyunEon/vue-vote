import { createApp } from 'vue'

/* vue3-snackbar 모듈들 */
import { SnackbarService } from "vue3-snackbar";
import { createPinia } from 'pinia';
import "vue3-snackbar/styles";

import App from './App.vue'
import router from './router/router.js'

const app = createApp(App);

app.use(SnackbarService);
app.use(createPinia());
app.use(router).mount('#app');
