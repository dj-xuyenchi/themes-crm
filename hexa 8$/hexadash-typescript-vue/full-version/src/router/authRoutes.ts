const routes = [
  {
    path: 'login',
    name: 'login',
    component: () => import('@/views/authentication/SignIn.vue'),
  },
  {
    path: 'register',
    name: 'register',
    component: () => import('@/views/authentication/Signup.vue'),
  },
  {
    path: 'forgotPassword',
    name: 'forgotPassword',
    component: () => import('@/views/authentication/ForgotPassword.vue'),
  },
];

export default routes;
