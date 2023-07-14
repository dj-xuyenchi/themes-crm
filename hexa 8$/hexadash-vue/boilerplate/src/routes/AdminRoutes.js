import PageRoutes from './PageRoutes';

const routes = [
  {
    path: '',
    name: 'blank-page',
    component: () => import(/* webpackChunkName: "Dashboard" */ '@/view/pages/BlankPage.vue'),
  },
  ...PageRoutes,
];

export default routes;
