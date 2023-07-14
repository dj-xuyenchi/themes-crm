import {
  TopMenuInterface
} from '../../interfaces/top-menu';

export const ROUTES: TopMenuInterface[] = [{
  path: '',
  megaClass: '',
  title: 'Dashboard',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'appstore-add',
  submenu: [{
      path: '/dashboard/demo-one',
      title: 'Demo One',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [],
    },
    {
      path: '/dashboard/demo-two',
      title: 'Demo Two',
      iconType: '',
      icon: '',

      iconTheme: '',
      submenu: []
    },
  ]
},
{
  path: '',
  megaClass: '',
  title: 'Apps',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'appstore',
  submenu: [{
      path: '',
      megaClass: '',
      title: 'Email',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
          path: '/apps/email/inbox',
          title: 'Inbox',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/apps/email/read-email',
          title: 'Read Email',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
      ]
    },
    {
      path: '/apps/projects',
      title: 'Project',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
          path: '/apps/projects/project-list',
          title: 'Projects',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/apps/projects/project-details',
          title: 'Project Details',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }
      ]
    },
    {
      path: '/apps/contacts',
      title: 'Contacts',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
          path: '/apps/contacts/contacts-grid',
          title: 'Contacts Grid',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/apps/contacts/contacts-list',
          title: 'Contact List',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }
      ]
    }
  ]
},
{
  path: '',
  megaClass: '',
  title: 'UI Elements',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'layout',
  submenu: [
    {
      path: '/demo/components/alert/en',
      megaClass: '',
      title: 'Alert',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/auto-complete/en/',
      title: 'Autocomplete',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/avatar/en',
      title: 'Avatar',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/badge/en',
      title: 'Badge',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/breadcrumb/en',
      title: 'Breadcrumb',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/button/en',
      title: 'Button',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/calendar/en',
      title: 'Calendar',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/card/en',
      title: 'Cards',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/carousel/en',
      title: 'Carousel',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/cascader/en/',
      title: 'Cascader',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/checkbox/en/',
      title: 'Checkbox',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/rate/en/',
      title: 'Rate',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/progress/en',
      title: 'Progress',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/demo/components/skeleton/en',
      title: 'Skeleton',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
  ]
},
{
  path: '',
  megaClass: '',
  title: 'Features',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'appstore',
  submenu: [{
      path: '',
      megaClass: '',
      title: 'Charts',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
        path: 'features/chartjs',
        title: 'Chart JS',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: [],
      },
      {
        path: 'features/apexchart',
        title: 'Apex Chart',
        iconType: '',
        icon: '',
        iconTheme: '',
        submenu: []
      },
    ]
    },
    {
      path: '/features/icon',
      title: 'Icons',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
          path: '/features/ant-icons',
          title: 'Ant Design',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/features/uni-icons',
          title: 'Uni Icons',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/features/feather-icons',
          title: 'Feather Icons',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }
      ]
    },
    {
      path: '',
      megaClass: '',
      title: 'Forms',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
          path: '/features/layouts',
          title: 'Form Layouts',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/features/elements',
          title: 'Form Elements',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/features/components',
          title: 'Form Components',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/features/validations',
          title: 'Form Validations',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }
      ]
    },
    {
      path: '',
      megaClass: '',
      title: 'Tables',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
          path: '/features/basic-table',
          title: 'Basic Table',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/features/data-table',
          title: 'Data Table',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }
      ]
    },
    {
      path: '',
      megaClass: '',
      title: 'Widgets',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
          path: '/features/charts',
          title: 'Charts',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        },
        {
          path: '/features/cards',
          title: 'Cards',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }
      ]
    },
    {
      path: '',
      megaClass: '',
      title: 'Wizards',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
          path: '/features/wizard-one',
          title: 'Wizard One',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }
      ]
    },
    {
      path: '',
      megaClass: '',
      title: 'Maps',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: [{
          path: '/features/google-maps',
          title: 'Google Maps',
          iconType: '',
          icon: '',
          iconTheme: '',
          submenu: []
        }
      ]
    },
  ],
},
{
  path: '',
  megaClass: '',
  title: 'Authentication',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'lock',
  submenu: [{
      path: '/authentication/login-1',
      title: 'Log In',
      iconType: '',
      icon: '',

      iconTheme: '',
      submenu: []
    },
    {
      path: '/authentication/sign-up-1',
      title: 'Sign Up',
      iconType: '',
      icon: '',

      iconTheme: '',
      submenu: []
    },
    {
      path: '/authentication/forget-pass',
      title: 'Forget password',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    }
  ]
},
{
  path: '',
  megaClass: '',
  title: 'Pages',
  iconType: 'nzIcon',
  iconTheme: 'outline',
  icon: 'rise',
  submenu: [
    {
      path: '/apps/todo',
      title: 'Todo',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/apps/chat',
      title: 'Chat',
      iconType: '',
      icon: '',
      iconTheme: '',
      submenu: []
    },
    {
      path: '/changelog/changelog',
      title: 'Change-Log',
      iconType: 'nzIcon',
      iconTheme: 'outline',
      icon: 'rise',
      submenu: []
    },
    {
      path: '/pages/setting',
      title: 'Setting',
      iconType: 'nzIcon',
      icon: 'setting',
      iconTheme: 'outline',
      submenu: []
    },
    {
      path: '/pages/gallery',
      title: 'Gallery',
      iconType: 'nzIcon',
      icon: 'file-image',
      iconTheme: 'outline',
      submenu: []
    },
    {
      path: '/pages/pricing',
      title: 'Pricing',
      iconType: 'nzIcon',
      icon: 'dollar-circle',
      iconTheme: 'outline',
      submenu: []
    },
    {
      path: '/pages/banner',
      title: 'Banners',
      iconType: 'nzIcon',
      icon: 'profile',
      iconTheme: 'outline',
      submenu: []
    },
    {
      path: '/pages/blank-page',
      title: 'Blank Page',
      iconType: 'nzIcon',
      icon: 'exclamation-circle',
      iconTheme: 'outline',
      submenu: []
    },
    {
      path: '/pages/blog-page',
      title: 'Blog Page',
      iconType: 'nzIcon',
      icon: 'picture',
      iconTheme: 'outline',
      submenu: []
    },
    {
      path: '/pages/coming-soon',
      title: 'Coming Soon',
      iconType: 'nzIcon',
      icon: 'reload',
      iconTheme: 'outline',
      submenu: []
    },
    {
      path: '/pages/error-page',
      title: '404',
      iconType: 'nzIcon',
      icon: 'stop',
      iconTheme: 'outline',
      submenu: []
    },
    {
      path: '/pages/maintenance',
      title: 'Maintenance',
      iconType: 'nzIcon',
      icon: 'question-circle',
      iconTheme: 'outline',
      submenu: []
    },
    {
      path: '/pages/terms-conditions',
      title: 'Terms & condition',
      iconType: 'nzIcon',
      icon: 'plus-circle',
      iconTheme: 'outline',
      submenu: []
    }
  ]
},
]
