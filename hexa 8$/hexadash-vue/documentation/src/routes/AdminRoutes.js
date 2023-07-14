import PageRoutes from './PageRoutes';

const routes = [
  {
    path: '',
    name: 'Overview',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/view/pages/Overview.vue'),
  },
  ...PageRoutes,
];

export default routes;
