import Form from '../views/Form.vue';
import ThankYou from '../views/ThankYou.vue';
import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import Form2 from '../views/Form2.vue';
import Form3 from '../views/Form3.vue';

const routes = [
  {
    path: '/:pathMatch(.*)',
    component: NotFound,
  },
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
