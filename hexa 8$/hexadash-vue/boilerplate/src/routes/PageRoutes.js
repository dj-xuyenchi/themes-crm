export default [
  {
    path: '/starter',
    name: 'starter',
    component: () => import(/* webpackChunkName: "Blank" */ '@/view/pages/BlankPage.vue'),
  },
  // {
  //   path: '/page',
  //   name: 'settings',
  //   component: () => import(/* webpackChunkName: "Settings" */ '@/view/pages/settings/Settings.vue'),
  //   children: [
  //     {
  //       path: 'profile-settings',
  //       name: 'profile-settings',
  //       component: () => import(/* webpackChunkName: "Profile" */ '@/view/pages/settings/overview/Profile.vue'),
  //     },
  //     {
  //       path: 'profile-settings/profile',
  //       name: 'set-profile',
  //       component: () => import(/* webpackChunkName: "Profile" */ '@/view/pages/settings/overview/Profile.vue'),
  //     },
  //     {
  //       path: 'profile-settings/account',
  //       name: 'set-account',
  //       component: () => import(/* webpackChunkName: "Account" */ '@/view/pages/settings/overview/Account.vue'),
  //     },
  //     {
  //       path: 'profile-settings/password',
  //       name: 'set-password',
  //       component: () => import(/* webpackChunkName: "Password" */ '@/view/pages/settings/overview/Password.vue'),
  //     },
  //     {
  //       path: 'profile-settings/social',
  //       name: 'set-social',
  //       component: () => import(/* webpackChunkName: "Social" */ '@/view/pages/settings/overview/SocialProfile.vue'),
  //     },
  //     {
  //       path: 'profile-settings/notification',
  //       name: 'set-notification',
  //       component: () =>
  //         import(/* webpackChunkName: "Notification" */ '@/view/pages/settings/overview/Notification.vue'),
  //     },
  //   ],
  // },

];
