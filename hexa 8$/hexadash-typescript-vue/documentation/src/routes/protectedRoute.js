import { createWebHistory, createRouter } from 'vue-router';
import adminRoutes from './AdminRoutes';

const routes = [
  {
    name: 'Admin',
    path: '/',
    component: () => import(/* webpackChunkName: "admin" */ '@/layout/withAdminLayout.vue'),
    children: [...adminRoutes],
    meta: { auth: false },
  }
];

const router = createRouter({
  history: createWebHistory(
    process.env.NODE_ENV === 'production'
      ? process.env.VUE_APP_SUB_ROUTE
        ? process.env.VUE_APP_SUB_ROUTE
        : process.env.BASE_URL
      : process.env.BASE_URL,
  ),
  linkExactActiveClass: 'active',
  routes,
});

export default router;
