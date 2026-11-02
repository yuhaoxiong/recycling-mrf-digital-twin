import { createApp } from 'vue';
import ActualApp from './ActualApp.vue';

const container = document.getElementById('root');
if (!container) throw new Error('Missing #root container');

createApp(ActualApp).mount(container);
