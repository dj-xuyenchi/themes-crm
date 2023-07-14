import Apps from './Applications';
import Features from './FeaturesRoutes';
import Pages from './PageRoutes';
import Components from './Components';

const routes = [
  {
    path: '',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/dashboard/DemoOne.vue'),
      },
      {
        path: 'demo-one',
        name: 'demoOne',
        component: () => import('@/views/dashboard/DemoOne.vue'),
      },
      {
        path: 'demo-two',
        name: 'demoTwo',
        component: () => import('@/views/dashboard/DemoTwo.vue'),
      },
      {
        path: 'demo-three',
        name: 'demoThree',
        component: () => import('@/views/dashboard/DemoThree.vue'),
      },
      {
        path: 'demo-four',
        name: 'demoFour',
        component: () => import('@/views/dashboard/DemoFour.vue'),
      },
      {
        path: 'demo-five',
        name: 'demoFive',
        component: () => import('@/views/dashboard/DemoFive.vue'),
      },
    ],
  },
  {
    path: '/crud',
    name: 'axios',
    component: () => import('@/views/crud/axios/Index.vue'),
    children: [
      {
        path: 'axios-view',
        name: 'axios-view',
        component: () => import('@/views/crud/axios/View.vue'),
      },
      {
        path: 'axios-edit/:id',
        name: 'axios-edit',
        component: () => import('@/views/crud/axios/Edit.vue'),
      },
      {
        path: 'axios-add',
        name: 'axios-add',
        component: () => import('@/views/crud/axios/AddNew.vue'),
      },
    ],
  },
  ...Apps,
  ...Features,
  ...Pages,
  ...Components,
];

export default routes;
