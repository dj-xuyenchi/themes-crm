export default [
  {
    path: '/starter',
    name: 'starter',
    component: () => import( '@/views/pages/BlankPage.vue'),
  },
  {
    path: '/page/testimonials',
    name: 'testimonials',
    component: () => import( '@/views/pages/Testimonials.vue'),
  },
  {
    path: '/page/faqs',
    name: 'faq`s',
    component: () => import( '@/views/pages/Faq.vue'),
  },
  {
    path: '/page/search',
    name: 'search',
    component: () => import( '@/views/pages/Search.vue'),
  },
  {
    path: '/page/gallery',
    name: 'gallery',
    component: () => import( '@/views/pages/Gallery.vue'),
  },
  {
    path: '/page/pricing',
    name: 'pricing',
    component: () => import( '@/views/pages/PricingTable.vue'),
  },
  {
    path: '/page/banners',
    name: 'banners',
    component: () => import( '@/views/pages/Banners.vue'),
  },
  {
    path: '/page/support',
    name: 'support',
    component: () => import( '@/views/pages/Support.vue'),
  },
  {
    path: '/page/maintenance',
    name: 'maintenance',
    component: () => import( '@/views/pages/Maintenance.vue'),
  },
  {
    path: '/page/404',
    name: '404',
    component: () => import( '@/views/pages/404.vue'),
  },
  {
    path: '/page/comingSoon',
    name: 'comingSoon',
    component: () => import( '@/views/pages/ComingSoon.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import( '@/views/pages/404.vue'),
  },
  {
    path: '/page',
    name: 'settings',
    component: () => import( '@/views/pages/settings/Settings.vue'),
    children: [
      {
        path: 'profile-settings',
        name: 'profile-settings',
        component: () => import( '@/views/pages/settings/overview/Profile.vue'),
      },
      {
        path: 'profile-settings/profile',
        name: 'set-profile',
        component: () => import( '@/views/pages/settings/overview/Profile.vue'),
      },
      {
        path: 'profile-settings/account',
        name: 'set-account',
        component: () => import( '@/views/pages/settings/overview/Account.vue'),
      },
      {
        path: 'profile-settings/password',
        name: 'set-password',
        component: () => import( '@/views/pages/settings/overview/Password.vue'),
      },
      {
        path: 'profile-settings/social',
        name: 'set-social',
        component: () => import( '@/views/pages/settings/overview/SocialProfile.vue'),
      },
      {
        path: 'profile-settings/notification',
        name: 'set-notification',
        component: () =>
          import('@/views/pages/settings/overview/Notification.vue'),
      },
    ],
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: () => import( '@/views/pages/Changelog.vue'),
  },
  {
    path: '/page/blog',
    name: 'blog',
    component: () => import( '@/views/pages/blog/Index.vue'),
    children: [
      {
        path: 'blog1',
        name: 'blog1',
        component: () => import( '@/views/pages/blog/BlogOne.vue'),
      },
      {
        path: 'blog2',
        name: 'blog2',
        component: () => import( '@/views/pages/blog/BlogTwo.vue'),
      },
      {
        path: 'blog3',
        name: 'blog3',
        component: () => import( '@/views/pages/blog/BlogThree.vue'),
      },
      {
        path: 'details/:id',
        name: 'details',
        component: () => import( '@/views/pages/blog/BlogDetails.vue'),
      }
    ],
  },
  {
    path: '/page/termsConditions',
    name: 'termsConditions',
    component: () => import( '@/views/pages/TermsConditions.vue'),
  },
];
