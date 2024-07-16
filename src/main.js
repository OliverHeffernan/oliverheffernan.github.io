import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const link = document.createElement('link');
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
link.rel = 'stylesheet';
document.head.appendChild(link);