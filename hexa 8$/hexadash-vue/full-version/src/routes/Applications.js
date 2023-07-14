export default [
  {
    path: '/app/mail',
    name: 'mail',
    component: () => import(/* webpackChunkName: "mail" */ '../view/apps/email/Email'),
    children: [
      {
        path: '',
        name: 'inbox',
        component: () => import(/* webpackChunkName: "Inbox" */ '@/view/apps/email/overview/Inbox.vue'),
      },
      {
        path: 'inbox',
        name: 'inbox',
        component: () => import(/* webpackChunkName: "Inbox" */ '@/view/apps/email/overview/Inbox.vue'),
      },
      {
        path: 'starred',
        name: 'starred',
        component: () => import(/* webpackChunkName: "starred" */ '@/view/apps/email/overview/Starred.vue'),
      },
      {
        path: 'sent',
        name: 'sent',
        component: () => import(/* webpackChunkName: "Sent" */ '@/view/apps/email/overview/Sent.vue'),
      },
      {
        path: 'drafts',
        name: 'drafts',
        component: () => import(/* webpackChunkName: "Draft" */ '@/view/apps/email/overview/Draft.vue'),
      },
      {
        path: 'spam',
        name: 'spam',
        component: () => import(/* webpackChunkName: "Spam" */ '@/view/apps/email/overview/Spam.vue'),
      },
      {
        path: 'trash',
        name: 'trash',
        component: () => import(/* webpackChunkName: "Trash" */ '@/view/apps/email/overview/Trash.vue'),
      },
      {
        path: '/app/mail-single/:id',
        name: 'singleMail',
        component: () => import(/* webpackChunkName: "singleMail" */ '@/view/apps/email/overview/MailDetailView.vue'),
        children: [
          {
            path: 'replay',
            name: 'Replay',
            components: {
              default: () =>
                import(/* webpackChunkName: "singleMail" */ '@/view/apps/email/overview/MailDetailView.vue'),
              child: () => import(/* webpackChunkName: "replay" */ '@/view/apps/email/overview/MailComposer.vue'),
            },
          },
          {
            path: 'forward',
            name: 'Forward',
            component: () => <h1></h1>,
          },
        ],
      },
    ],
  },
  {
    path: '/app/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ '../view/apps/chat/ChatApp.vue'),
    children: [
      {
        name: 'private',
        path: 'private',
        component: () => import(/* webpackChunkName: "private" */ '../view/apps/chat/overview/PrivetChat.vue'),
      },
      {
        name: 'privateSingle',
        path: 'private/:id',
        components: {
          default: () => import(/* webpackChunkName: "private" */ '../view/apps/chat/overview/PrivetChat.vue'),
          child: () => import(/* webpackChunkName: "privateSingle" */ '../view/apps/chat/overview/SingleChat.vue'),
        },
      },
      {
        name: 'group',
        path: 'group',
        component: () => import(/* webpackChunkName: "group" */ '../view/apps/chat/overview/GroupChat.vue'),
      },
      {
        name: 'groupSingle',
        path: 'group/:id',
        components: {
          default: () => import(/* webpackChunkName: "private" */ '../view/apps/chat/overview/GroupChat.vue'),
          child: () => import(/* webpackChunkName: "privateSingle" */ '../view/apps/chat/overview/SingleGroupChat.vue'),
        },
      },
      {
        name: 'all',
        path: 'all',
        component: () => import(/* webpackChunkName: "all" */ '../view/apps/chat/overview/AllContacts.vue'),
      },
      {
        name: 'allSingle',
        path: 'all/:id',
        components: {
          default: () => import(/* webpackChunkName: "private" */ '../view/apps/chat/overview/AllContacts.vue'),
          child: () => import(/* webpackChunkName: "privateSingle" */ '../view/apps/chat/overview/SingleChat.vue'),
        },
      },
    ],
  },
  {
    name: 'ecommerce',
    path: '/app',
    component: () => import(/* webpackChunkName: "ecommerce" */ '../view/apps/ecommerce/Index.vue'),
    children: [
      {
        path: 'ecommerce',
        name: 'ecommerce-product',
        component: () => import(/* webpackChunkName: "product" */ '../view/apps/ecommerce/product/Products.vue'),
        children: [
          {
            name: 'product',
            path: 'product',
            component: () => import(/* webpackChunkName: "product" */ '../view/apps/ecommerce/product/Products.vue'),
          },
          {
            name: 'pro-grid',
            path: 'product/grid',
            components: {
              default: () => import(/* webpackChunkName: "product" */ '../view/apps/ecommerce/product/Products.vue'),
              grid: () => import(/* webpackChunkName: "grid" */ '../view/apps/ecommerce/product/overview/Grid.vue'),
            },
          },
          {
            name: 'pro-list',
            path: 'product/list',
            components: {
              default: () => import(/* webpackChunkName: "product" */ '../view/apps/ecommerce/product/Products.vue'),
              grid: () => import(/* webpackChunkName: "grid" */ '../view/apps/ecommerce/product/overview/List.vue'),
            },
          },
        ],
      },
      {
        name: 'detail',
        path: 'ecommerce/productDetails/:id',
        component: () => import(/* webpackChunkName: "detail" */ '../view/apps/ecommerce/product/ProductDetails.vue'),
      },
      {
        name: 'add-product',
        path: 'ecommerce/add-product',
        component: () => import(/* webpackChunkName: "addProduct" */ '../view/apps/ecommerce/product/AddProduct.vue'),
      },
      {
        name: 'edit-product',
        path: 'ecommerce/edit-product',
        component: () => import(/* webpackChunkName: "editProduct" */ '../view/apps/ecommerce/product/EditProduct.vue'),
      },
      {
        name: 'orders',
        path: 'ecommerce/orders',
        component: () => import(/* webpackChunkName: "Orders" */ '../view/apps/ecommerce/Orders.vue'),
      },
      {
        name: 'sellers',
        path: 'ecommerce/sellers',
        component: () => import(/* webpackChunkName: "sellers" */ '../view/apps/ecommerce/Sellers.vue'),
      },
      {
        name: 'invoice',
        path: 'ecommerce/invoice',
        component: () => import(/* webpackChunkName: "invoice" */ '../view/apps/ecommerce/Invoice.vue'),
      },
      {
        name: 'cart',
        path: 'ecommerce/cart',
        component: () => import(/* webpackChunkName: "cart" */ '../view/apps/ecommerce/Cart.vue'),
        children: [
          {
            name: 'exact',
            path: '',
            components: {
              default: () => import(/* webpackChunkName: "cart" */ '../view/apps/ecommerce/Cart.vue'),
              child: () => import(/* webpackChunkName: "cartTable" */ '../view/apps/ecommerce/overview/CartTable.vue'),
            },
          },
          {
            name: 'checkout',
            path: 'checkout',
            components: {
              default: () => import(/* webpackChunkName: "cart" */ '../view/apps/ecommerce/Cart.vue'),
              child: () => import(/* webpackChunkName: "checkout" */ '../view/apps/ecommerce/overview/CheckOut.vue'),
            },
          },
        ],
      },
    ],
  },
  {
    name: 'social',
    path: '/app/social/profile',
    component: () => import(/* webpackChunkName: "socialProfile" */ '../view/apps/myProfile/Index.vue'),
    children: [
      {
        path: 'overview',
        name: 'overview',
        components: {
          default: () => import(/* webpackChunkName: "socialProfile" */ '../view/apps/myProfile/Index.vue'),
          child: () => import(/* webpackChunkName: "overview" */ '../view/apps/myProfile/overview/Overview.vue'),
        },
      },
      {
        path: 'timeline',
        name: 'timeline',
        components: {
          default: () => import(/* webpackChunkName: "socialProfile" */ '../view/apps/myProfile/Index.vue'),
          child: () => import(/* webpackChunkName: "timeline" */ '../view/apps/myProfile/overview/Timeline.vue'),
        },
      },
      {
        path: 'activity',
        name: 'activity',
        components: {
          default: () => import(/* webpackChunkName: "socialProfile" */ '../view/apps/myProfile/Index.vue'),
          child: () => import(/* webpackChunkName: "activity" */ '../view/apps/myProfile/overview/Activity.vue'),
        },
      },
    ],
  },
  {
    name: 'project',
    path: '/app/project',
    component: () => import(/* webpackChunkName: "project" */ '../view/apps/project/Project.vue'),
    children: [
      {
        path: 'project-grid',
        name: 'project-grid',
        component: () => import(/* webpackChunkName: "project-grid" */ '../view/apps/project/overview/Grid.vue')
      },
      {
        path: 'project-list',
        name: 'project-list',
        component: () => import(/* webpackChunkName: "project-list" */ '../view/apps/project/overview/List.vue')
      },
    ],
  },
  {
    name: 'createProject',
    path: '/app/createProject',
    component: () => import(/* webpackChunkName: "createProject" */ '../view/apps/project/CreateProject.vue'),
    children: [
      {
        path: 'create-grid',
        name: 'create-grid',
        components: {
          default: () => import(/* webpackChunkName: "project" */ '../view/apps/project/CreateProject.vue'),
          child: () => import(/* webpackChunkName: "grid" */ '../view/apps/project/overview/Grid.vue'),
        },
      },
    ],
  },
  {
    name: 'projectDetails',
    path: '/app/project/projectDetails/:id',
    component: () => import(/* webpackChunkName: "projectDetail" */ '../view/apps/project/ProjectDetails.vue'),
    children: [
      {
        path: '',
        name: '',
        components: {
          default: () => import(/* webpackChunkName: "projectDetail" */ '../view/apps/project/ProjectDetails.vue'),
          child: () => import(/* webpackChunkName: "tasklist" */ '../view/apps/project/overview/TaskList.vue'),
        },
      },
      {
        path: 'tasklist',
        name: 'tasklist',
        components: {
          default: () => import(/* webpackChunkName: "projectDetail" */ '../view/apps/project/ProjectDetails.vue'),
          child: () => import(/* webpackChunkName: "tasklist" */ '../view/apps/project/overview/TaskList.vue'),
        },
      },
      {
        path: 'activities',
        name: 'activities',
        components: {
          default: () => import(/* webpackChunkName: "projectDetail" */ '../view/apps/project/ProjectDetails.vue'),
          child: () => import(/* webpackChunkName: "activities" */ '../view/apps/project/overview/Activities.vue'),
        },
      },
    ],
  },
  {
    name: 'calendar',
    path: '/app/calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '../view/apps/calendar/Calendar.vue'),
    children: [
      {
        name: 'year',
        path: 'year',
        components: {
          default: () => import(/* webpackChunkName: "calendar" */ '../view/apps/calendar/Calendar.vue'),
          child: () => import(/* webpackChunkName: "year" */ '../view/apps/calendar/overview/Year.vue'),
        },
      },
      {
        name: 'month',
        path: 'month',
        components: {
          default: () => import(/* webpackChunkName: "calendar" */ '../view/apps/calendar/Calendar.vue'),
          child: () => import(/* webpackChunkName: "month" */ '../view/apps/calendar/overview/Month.vue'),
        },
      },
      {
        name: 'week',
        path: 'week',
        components: {
          default: () => import(/* webpackChunkName: "calendar" */ '../view/apps/calendar/Calendar.vue'),
          child: () => import(/* webpackChunkName: "week" */ '../view/apps/calendar/overview/Week.vue'),
        },
      },
      {
        name: 'day',
        path: 'day',
        components: {
          default: () => import(/* webpackChunkName: "calendar" */ '../view/apps/calendar/Calendar.vue'),
          child: () => import(/* webpackChunkName: "day" */ '../view/apps/calendar/overview/Day.vue'),
        },
      },
      {
        name: 'schedule',
        path: 'schedule',
        components: {
          default: () => import(/* webpackChunkName: "calendar" */ '../view/apps/calendar/Calendar.vue'),
          child: () => import(/* webpackChunkName: "schedule" */ '../view/apps/calendar/overview/Schedule.vue'),
        },
      },
    ],
  },
  {
    name: 'users',
    path: '/app/users',
    component: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
    children: [
      {
        path: 'dataTable',
        name: 'dataTable',
        components: {
          default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
          child: () => import(/* webpackChunkName: "dataTable" */ '../view/apps/users/UserListDataTable.vue'),
        },
      },
      {
        path: 'team',
        name: 'team',
        components: {
          default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
          child: () => import(/* webpackChunkName: "team" */ '../view/apps/users/Team.vue'),
        },
      },
      {
        path: 'users',
        name: 'users-1',
        components: {
          default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
          child: () => import(/* webpackChunkName: "users-1" */ '../view/apps/users/Users.vue'),
        },
        children: [
          {
            path: 'user-grid',
            name: 'user-grid',
            components: {
              default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
              descendant: () => import(/* webpackChunkName: "user-grid" */ '../view/apps/users/overview/UserCard.vue'),
            },
          },
          {
            path: 'user-list',
            name: 'user-list',
            components: {
              default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
              descendant: () =>
                import(/* webpackChunkName: "user-list" */ '../view/apps/users/overview/UserCardList.vue'),
            },
          },
          {
            path: 'grid-style',
            name: 'grid-style',
            components: {
              default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
              descendant: () =>
                import(/* webpackChunkName: "user-style" */ '../view/apps/users/overview/UserCardStyle.vue'),
            },
          },
          {
            path: 'grid-group',
            name: 'grid-group',
            components: {
              default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
              descendant: () =>
                import(/* webpackChunkName: "user-group" */ '../view/apps/users/overview/UserCardGroup.vue'),
            },
          },
        ],
      },
      {
        path: 'add-user',
        name: 'add-user',
        components: {
          default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
          child: () => import(/* webpackChunkName: "addUser" */ '../view/apps/users/AddUsers.vue'),
        },
        children: [
          {
            path: 'info',
            name: 'info',
            components: {
              default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
              descendant: () => import(/* webpackChunkName: "info" */ '../view/apps/users/overview/Info.vue'),
            },
          },
          {
            path: 'work',
            name: 'work',
            components: {
              default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
              descendant: () => import(/* webpackChunkName: "work" */ '../view/apps/users/overview/work.vue'),
            },
          },
          {
            path: 'social',
            name: 'social-user',
            components: {
              default: () => import(/* webpackChunkName: "users" */ '../view/apps/users/Index.vue'),
              descendant: () => import(/* webpackChunkName: "social-user" */ '../view/apps/users/overview/Social.vue'),
            },
          },
        ],
      },
    ],
  },
  {
    name: 'contact',
    path: '/app/contact',
    component: () => import(/* webpackChunkName: "contact-grid" */ '../view/apps/contact/Index.vue'),
    children: [
      {
        name: 'contact-grid',
        path: 'contact-grid',
        component: () => import(/* webpackChunkName: "contact-grid" */ '../view/apps/contact/ContactGrid.vue'),
      },
      {
        name: 'contact-list',
        path: 'contact-list',
        component: () => import(/* webpackChunkName: "contact-list" */ '../view/apps/contact/Contact.vue'),
      },
      {
        name: 'contact-create',
        path: 'contact-create',
        component: () => import(/* webpackChunkName: "contact-create" */ '../view/apps/contact/ContactCreate.vue'),
      },
    ],
  },

  {
    name: 'note',
    path: '/app/note',
    component: () => import(/* webpackChunkName: "note" */ '../view/apps/note/Note.vue'),
    children: [
      {
        path: 'all',
        name: 'note-all',
        components: {
          default: () => import(/* webpackChunkName: "note" */ '../view/apps/note/Note.vue'),
          child: () => import(/* webpackChunkName: "note-all" */ '../view/apps/note/overview/all.vue'),
        },
      },
      {
        path: 'favorite',
        name: 'note-favorite',
        components: {
          default: () => import(/* webpackChunkName: "note" */ '../view/apps/note/Note.vue'),
          child: () => import(/* webpackChunkName: "note-favorite" */ '../view/apps/note/overview/favorite.vue'),
        },
      },
      {
        path: 'personal',
        name: 'note-personal',
        components: {
          default: () => import(/* webpackChunkName: "note" */ '../view/apps/note/Note.vue'),
          child: () => import(/* webpackChunkName: "note-personal" */ '../view/apps/note/overview/personal.vue'),
        },
      },
      {
        path: 'work',
        name: 'note-work',
        components: {
          default: () => import(/* webpackChunkName: "note" */ '../view/apps/note/Note.vue'),
          child: () => import(/* webpackChunkName: "note-work" */ '../view/apps/note/overview/work.vue'),
        },
      },
      {
        path: 'social',
        name: 'social-note',
        components: {
          default: () => import(/* webpackChunkName: "note" */ '../view/apps/note/Note.vue'),
          child: () => import(/* webpackChunkName: "social-note" */ '../view/apps/note/overview/social.vue'),
        },
      },
      {
        path: 'important',
        name: 'note-important',
        components: {
          default: () => import(/* webpackChunkName: "note" */ '../view/apps/note/Note.vue'),
          child: () => import(/* webpackChunkName: "important" */ '../view/apps/note/overview/important.vue'),
        },
      },
    ],
  },
  {
    name: 'to-do',
    path: '/app/to-do',
    component: () => import(/* webpackChunkName: "to-do" */ '../view/apps/todo/Todo.vue'),
  },
  {
    name: 'import-export',
    path: '/app',
    component: () => import(/* webpackChunkName: "import" */ '../view/apps/importExport/Index.vue'),
    children: [
      {
        name: 'import',
        path: 'import',
        component: () => import(/* webpackChunkName: "import" */ '../view/apps/importExport/Import.vue'),
      },
      {
        name: 'export',
        path: 'export',
        component: () => import(/* webpackChunkName: "export" */ '../view/apps/importExport/Export.vue'),
      },
    ],
  },

  {
    name: 'task',
    path: '/app/task',
    component: () => import(/* webpackChunkName: "task" */ '../view/apps/task/Index.vue'),
    children: [
      {
        name: 'all',
        path: 'all',
        components: {
          default: () => import(/* webpackChunkName: "task" */ '../view/apps/task/Index.vue'),
          child: () => import(/* webpackChunkName: "all" */ '../view/apps/task/overview/all.vue'),
        },
      },
      {
        name: 'favorites',
        path: 'favorites',
        components: {
          default: () => import(/* webpackChunkName: "task" */ '../view/apps/task/Index.vue'),
          child: () => import(/* webpackChunkName: "favorites" */ '../view/apps/task/overview/favorites.vue'),
        },
      },
      {
        name: 'completed',
        path: 'completed',
        components: {
          default: () => import(/* webpackChunkName: "task" */ '../view/apps/task/Index.vue'),
          child: () => import(/* webpackChunkName: "completed" */ '../view/apps/task/overview/completed.vue'),
        },
      },
    ],
  },
  {
    name: 'kanban',
    path: '/app/kanban',
    component: () => import(/* webpackChunkName: "kanban" */ '../view/apps/kanban/Index.vue'),
  },
  {
    name: 'tickets',
    path: '/app/support/tickets',
    component: () => import(/* webpackChunkName: "tickets" */ '../view/apps/supportTicket/SupportTicket.vue'),
  },
  {
    name: 'ticketDetails',
    path: '/app/support/ticketDetails/:id',
    component: () => import(/* webpackChunkName: "ticketDetails" */ '../view/apps/supportTicket/SupportTicketDetails.vue'),
  },
  {
    name: 'learning',
    path: '/app/learning/course',
    component: () => import(/* webpackChunkName: "course" */ '../view/apps/course/Course.vue'),
  },
  {
    name: 'courseDetails',
    path: '/app/learning/courseDetails/:id',
    component: () => import(/* webpackChunkName: "course" */ '../view/apps/course/CourseDetails.vue'),
  },
  {
    name: 'jobSearch',
    path: '/app/jobSearch',
    component: () => import(/* webpackChunkName: "jobSearch" */ '../view/apps/jobSearch/Jobs.vue'),
    children: [
      {
        path: 'grid',
        name: 'grid',
        component: () => import(/* webpackChunkName: "grid" */ '../view/apps/jobSearch/overview/Grid.vue'),
      },
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '../view/apps/jobSearch/overview/List.vue'),
      },
    ],
  },
  {
    name: 'jobDetails',
    path: '/app/jobDetails/:id',
    component: () => import(/* webpackChunkName: "jobDetails" */ '../view/apps/jobSearch/JobSearchDetails.vue'),

  },
  {
    name: 'apply',
    path: '/app/job/apply',
    component: () => import(/* webpackChunkName: "apply" */ '../view/apps/jobSearch/JobApplication.vue'),
  },
];
