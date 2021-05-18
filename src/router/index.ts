import Form from '../views/Form.vue';
import ThankYou from '../views/ThankYou.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Form,
  },
  {
    path: '/thankyou',
    component: ThankYou,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
