import { createWebHistory, createRouter } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import adminRoutes from './adminRoutes';
import authRoutes from './authRoutes';
import store from '@/vuex/store';

const stores: any = store;
const routes: Array<RouteRecordRaw> = [
  {
    name: 'Admin',
    path: '/',
    component: () => import('../layout/AdminLayout.vue'),
    children: [...adminRoutes],
    meta: { auth: false },
  },
  {
    name: 'Auth',
    path: '/auth',
    component: () => import('../layout/AuthLayout.vue'),
    children: [...authRoutes],
    meta: { auth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && stores.state.auth.login) {
    next({ path: '/' });
  } else if (!to.meta.auth && !stores.state.auth.login) {
    next({ name: 'login' });
  } else {
    next();
  }
  window.scrollTo(0, 0); // reset scroll position to top of page
});

export default router;
