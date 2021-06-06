import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faLine, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';
import './assets/font.css';
import './assets/index.css';
import router from './router';

library.add(faFacebookF, faLine, faTwitter, faInstagram);

createApp(App).use(router).component('fa', FontAwesomeIcon).mount('#app');
