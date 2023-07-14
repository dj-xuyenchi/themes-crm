import { createWebHistory, createRouter } from 'vue-router';
import adminRoutes from './AdminRoutes';
import authRoutes from './authRoutes';
import store from '@/vuex/store';

const routes = [
  {
    name: 'Admin',
    path: '/',
    component: () => import(/* webpackChunkName: "admin" */ '@/layout/withAdminLayout.vue'),
    children: [...adminRoutes],
    meta: { auth: false },
  },
  {
    name: 'Auth',
    path: '/auth',
    component: () => import(/* webpackChunkName: "auth" */ '@/layout/withAuthLayout.vue'),
    children: [...authRoutes],
    meta: { auth: true },
  },
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

router.beforeEach((to, from, next) => {
  // console.log(to, store);
  if (to.meta.auth && store.state.auth.login) {
    next({ to: '/' });
  } else if (!to.meta.auth && !store.state.auth.login) {
    next({ name: 'login' });
  } else {
    next();
  }
  window.scrollTo(0, 0); // reset scroll position to top of page
  next();
});

export default router;
