import { createApp } from 'vue';
import App from './App.vue';
import './ui/styles.css';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root container');

createApp(App).mount(container);
