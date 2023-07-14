export default [
  {
    path: '/starter',
    name: 'starter',
    component: () => import(/* webpackChunkName: "Blank" */ '@/view/pages/BlankPage.vue'),
  },
  {
    path: '/page/testimonials',
    name: 'testimonials',
    component: () => import(/* webpackChunkName: "Testimonials" */ '@/view/pages/Testimonials.vue'),
  },
  {
    path: '/page/faqs',
    name: 'faq`s',
    component: () => import(/* webpackChunkName: "Faq" */ '@/view/pages/Faq.vue'),
  },
  {
    path: '/page/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "Search" */ '@/view/pages/Search.vue'),
  },
  {
    path: '/page/gallery',
    name: 'gallery',
    component: () => import(/* webpackChunkName: "Gallery" */ '@/view/pages/Gallery.vue'),
  },
  {
    path: '/page/pricing',
    name: 'pricing',
    component: () => import(/* webpackChunkName: "PricingTable" */ '@/view/pages/PricingTable.vue'),
  },
  {
    path: '/page/banners',
    name: 'banners',
    component: () => import(/* webpackChunkName: "Banners" */ '@/view/pages/Banners.vue'),
  },
  {
    path: '/page/support',
    name: 'support',
    component: () => import(/* webpackChunkName: "support" */ '@/view/pages/Support.vue'),
  },
  {
    path: '/page/maintenance',
    name: 'maintenance',
    component: () => import(/* webpackChunkName: "maintenance" */ '@/view/pages/Maintenance.vue'),
  },
  {
    path: '/page/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/view/pages/404.vue'),
  },
  {
    path: '/page/comingSoon',
    name: 'comingSoon',
    component: () => import(/* webpackChunkName: "comingSoon" */ '@/view/pages/ComingSoon.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: () => import(/* webpackChunkName: "404" */ '@/view/pages/404.vue'),
  },
  {
    path: '/page',
    name: 'settings',
    component: () => import(/* webpackChunkName: "Settings" */ '@/view/pages/settings/Settings.vue'),
    children: [
      {
        path: 'profile-settings',
        name: 'profile-settings',
        component: () => import(/* webpackChunkName: "Profile" */ '@/view/pages/settings/overview/Profile.vue'),
      },
      {
        path: 'profile-settings/profile',
        name: 'set-profile',
        component: () => import(/* webpackChunkName: "Profile" */ '@/view/pages/settings/overview/Profile.vue'),
      },
      {
        path: 'profile-settings/account',
        name: 'set-account',
        component: () => import(/* webpackChunkName: "Account" */ '@/view/pages/settings/overview/Account.vue'),
      },
      {
        path: 'profile-settings/password',
        name: 'set-password',
        component: () => import(/* webpackChunkName: "Password" */ '@/view/pages/settings/overview/Password.vue'),
      },
      {
        path: 'profile-settings/social',
        name: 'set-social',
        component: () => import(/* webpackChunkName: "Social" */ '@/view/pages/settings/overview/SocialProfile.vue'),
      },
      {
        path: 'profile-settings/notification',
        name: 'set-notification',
        component: () =>
          import(/* webpackChunkName: "Notification" */ '@/view/pages/settings/overview/Notification.vue'),
      },
    ],
  },
  {
    path: '/page/knowledgebase',
    name: 'knowledgebase',
    component: () => import(/* webpackChunkName: "knowledgebase" */ '@/view/pages/knowledgebase/MainBox.vue'),
    children: [
      {
        path: 'base',
        name: 'base',
        component: () => import(/* webpackChunkName: "base" */ '@/view/pages/knowledgebase/Index.vue'),
        children: [
          {
            path: 'plugins',
            name: 'kno-plugins',
            component: () =>
              import(/* webpackChunkName: "Plugins" */ '@/view/pages/knowledgebase/overview/ArticlePlugin.vue'),
          },
          {
            path: 'themes',
            name: 'kno-themes',
            component: () =>
              import(/* webpackChunkName: "Themes" */ '@/view/pages/knowledgebase/overview/ArticleTheme.vue'),
          },
          {
            path: 'extensions',
            name: 'kno-extensions',
            component: () =>
              import(/* webpackChunkName: "Extensions" */ '@/view/pages/knowledgebase/overview/ArticleExtension.vue'),
          },
        ],
      },
      {
        path: 'all-articles',
        name: 'all-articles',
        component: () => import(/* webpackChunkName: "all-articles" */ '@/view/pages/knowledgebase/AllArticle.vue'),
      },
      {
        path: 'single/1',
        name: 'knowledge-base-singale',
        component: () =>
          import(/* webpackChunkName: "knowledge-base" */ '@/view/pages/knowledgebase/SingleKnowledge.vue'),
      },
    ],
  },
  {
    path: '/changelog',
    name: 'changelog',
    component: () => import(/* webpackChunkName: "changelog" */ '@/view/pages/Changelog.vue'),
  },
  {
    path: '/page/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '@/view/pages/blog/Index.vue'),
    children: [
      {
        path: 'blog1',
        name: 'blog1',
        component: () => import(/* webpackChunkName: "blog1" */ '@/view/pages/blog/BlogOne.vue'),
      },
      {
        path: 'blog2',
        name: 'blog2',
        component: () => import(/* webpackChunkName: "blog2" */ '@/view/pages/blog/BlogTwo.vue'),
      },
      {
        path: 'blog3',
        name: 'blog3',
        component: () => import(/* webpackChunkName: "blog3" */ '@/view/pages/blog/BlogThree.vue'),
      },
      {
        path: 'details/:id',
        name: 'details',
        component: () => import(/* webpackChunkName: "details" */ '@/view/pages/blog/BlogDetails.vue'),
      }
    ],
  },
  {
    path: '/page/termsConditions',
    name: 'termsConditions',
    component: () => import(/* webpackChunkName: "termsConditions" */ '@/view/pages/TermsConditions.vue'),
  },
];
