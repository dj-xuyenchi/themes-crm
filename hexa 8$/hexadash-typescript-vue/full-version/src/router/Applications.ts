export default [
  {
    path: '/app/mail',
    name: 'mail',
    component: () => import('../views/apps/email/Email.vue'),
    children: [
      {
        path: '',
        name: 'inbox',
        component: () => import('@/views/apps/email/overview/Inbox.vue'),
      },
      {
        path: 'inbox',
        name: 'inbox',
        component: () => import('@/views/apps/email/overview/Inbox.vue'),
      },
      {
        path: 'starred',
        name: 'starred',
        component: () => import('@/views/apps/email/overview/Starred.vue'),
      },
      {
        path: 'sent',
        name: 'sent',
        component: () => import('@/views/apps/email/overview/Sent.vue'),
      },
      {
        path: 'drafts',
        name: 'drafts',
        component: () => import('@/views/apps/email/overview/Draft.vue'),
      },
      {
        path: 'spam',
        name: 'spam',
        component: () => import('@/views/apps/email/overview/Spam.vue'),
      },
      {
        path: 'trash',
        name: 'trash',
        component: () => import('@/views/apps/email/overview/Trash.vue'),
      },
      {
        path: '/app/mail-single/:id',
        name: 'singleMail',
        component: () => import('@/views/apps/email/overview/MailDetailView.vue'),
        children: [
          {
            path: 'replay',
            name: 'Replay',
            components: {
              default: () => import('@/views/apps/email/overview/MailDetailView.vue'),
              child: () => import('@/views/apps/email/overview/MailComposer.vue'),
            },
          },
          {
            path: 'forward',
            name: 'Forward',
            component: () => import('@/views/apps/email/overview/MailComposer.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/app/chat',
    name: 'chat',
    component: () => import('../views/apps/chat/ChatApp.vue'),
    children: [
      {
        name: 'private',
        path: 'private',
        component: () => import('../views/apps/chat/overview/PrivateChat.vue'),
      },
      {
        name: 'privateSingle',
        path: 'private/:id',
        components: {
          default: () => import('../views/apps/chat/overview/PrivateChat.vue'),
          child: () => import('../views/apps/chat/overview/SingleChat.vue'),
        },
      },
      {
        name: 'group',
        path: 'group',
        component: () => import('../views/apps/chat/overview/GroupChat.vue'),
      },
      {
        name: 'groupSingle',
        path: 'group/:id',
        components: {
          default: () => import('../views/apps/chat/overview/GroupChat.vue'),
          child: () => import('../views/apps/chat/overview/SingleGroupChat.vue'),
        },
      },
      {
        name: 'all',
        path: 'all',
        component: () => import('../views/apps/chat/overview/AllContacts.vue'),
      },
      {
        name: 'allSingle',
        path: 'all/:id',
        components: {
          default: () => import('../views/apps/chat/overview/AllContacts.vue'),
          child: () => import('../views/apps/chat/overview/SingleChat.vue'),
        },
      },
    ],
  },
  {
    name: 'ecommerce',
    path: '/app',
    component: () => import('../views/apps/ecommerce/Index.vue'),
    children: [
      {
        path: 'ecommerce',
        name: 'ecommerce-product',
        component: () => import('../views/apps/ecommerce/product/Products.vue'),
        children: [
          {
            name: 'product',
            path: 'product',
            component: () => import('../views/apps/ecommerce/product/Products.vue'),
          },
          {
            name: 'pro-grid',
            path: 'product/grid',
            components: {
              default: () => import('../views/apps/ecommerce/product/Products.vue'),
              grid: () => import('../views/apps/ecommerce/product/overview/Grid.vue'),
            },
          },
          {
            name: 'pro-list',
            path: 'product/list',
            components: {
              default: () => import('../views/apps/ecommerce/product/Products.vue'),
              grid: () => import('../views/apps/ecommerce/product/overview/List.vue'),
            },
          },
        ],
      },
      {
        name: 'detail',
        path: 'ecommerce/productDetails/:id',
        component: () => import('../views/apps/ecommerce/product/ProductDetails.vue'),
      },
      {
        name: 'add-product',
        path: 'ecommerce/add-product',
        component: () => import('../views/apps/ecommerce/product/AddProduct.vue'),
      },
      {
        name: 'edit-product',
        path: 'ecommerce/edit-product',
        component: () => import('../views/apps/ecommerce/product/EditProduct.vue'),
      },
      {
        name: 'orders',
        path: 'ecommerce/orders',
        component: () => import('../views/apps/ecommerce/Orders.vue'),
      },
      {
        name: 'sellers',
        path: 'ecommerce/sellers',
        component: () => import('../views/apps/ecommerce/Sellers.vue'),
      },
      {
        name: 'invoice',
        path: 'ecommerce/invoice',
        component: () => import('../views/apps/ecommerce/Invoice.vue'),
      },
      {
        name: 'cart',
        path: 'ecommerce/cart',
        component: () => import('../views/apps/ecommerce/Cart.vue'),
        children: [
          {
            name: 'exact',
            path: '',
            components: {
              default: () => import('../views/apps/ecommerce/Cart.vue'),
              child: () => import('../views/apps/ecommerce/overview/CartTable.vue'),
            },
          },
          {
            name: 'checkout',
            path: 'checkout',
            components: {
              default: () => import('../views/apps/ecommerce/Cart.vue'),
              child: () => import('../views/apps/ecommerce/overview/CheckOut.vue'),
            },
          },
        ],
      },
    ],
  },
  {
    name: 'social',
    path: '/app/social/profile',
    component: () => import('../views/apps/myProfile/Index.vue'),
    children: [
      {
        path: 'overview',
        name: 'overview',
        components: {
          default: () => import('../views/apps/myProfile/Index.vue'),
          child: () => import('../views/apps/myProfile/overview/Overview.vue'),
        },
      },
      {
        path: 'timeline',
        name: 'timeline',
        components: {
          default: () => import('../views/apps/myProfile/Index.vue'),
          child: () => import('../views/apps/myProfile/overview/Timeline.vue'),
        },
      },
      {
        path: 'activity',
        name: 'activity',
        components: {
          default: () => import('../views/apps/myProfile/Index.vue'),
          child: () => import('../views/apps/myProfile/overview/Activity.vue'),
        },
      },
    ],
  },
  {
    name: 'project',
    path: '/app/project',
    component: () => import('../views/apps/project/Project.vue'),
    children: [
      {
        path: 'project-grid',
        name: 'project-grid',
        component: () => import('../views/apps/project/overview/Grid.vue')
      },
      {
        path: 'project-list',
        name: 'project-list',
        component: () => import('../views/apps/project/overview/List.vue')
      },
    ],
  },
  {
    name: 'createProject',
    path: '/app/createProject',
    component: () => import('../views/apps/project/CreateProject.vue'),
    children: [
      {
        path: 'create-grid',
        name: 'create-grid',
        components: {
          default: () => import('../views/apps/project/CreateProject.vue'),
          child: () => import('../views/apps/project/overview/Grid.vue'),
        },
      },
    ],
  },
  {
    name: 'projectDetails',
    path: '/app/project/projectDetails/:id',
    component: () => import('../views/apps/project/ProjectDetails.vue'),
    children: [
      {
        path: '',
        name: '',
        components: {
          default: () => import('../views/apps/project/ProjectDetails.vue'),
          child: () => import('../views/apps/project/overview/TaskList.vue'),
        },
      },
      {
        path: 'tasklist',
        name: 'tasklist',
        components: {
          default: () => import('../views/apps/project/ProjectDetails.vue'),
          child: () => import('../views/apps/project/overview/TaskList.vue'),
        },
      },
      {
        path: 'activities',
        name: 'activities',
        components: {
          default: () => import('../views/apps/project/ProjectDetails.vue'),
          child: () => import('../views/apps/project/overview/Activities.vue'),
        },
      },
    ],
  },
  {
    name: 'jobSearch',
    path: '/app/jobSearch',
    component: () => import('../views/apps/jobSearch/Jobs.vue'),
    children: [
      {
        path: 'grid',
        name: 'grid',
        component: () => import('../views/apps/jobSearch/overview/Grid.vue'),
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/apps/jobSearch/overview/List.vue'),
      },
    ],
  },
  {
    name: 'jobDetails',
    path: '/app/jobDetails/:id',
    component: () => import('../views/apps/jobSearch/JobSearchDetails.vue'),

  },
  {
    name: 'apply',
    path: '/app/job/apply',
    component: () => import('../views/apps/jobSearch/JobApplication.vue'),
  },
];
