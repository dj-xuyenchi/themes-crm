export default [
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "components" */ '@/view/uiElements/Index.vue'),
    children: [
      {
        path: 'drag-drop',
        name: 'drag',
        component: () => import(/* webpackChunkName: "DragAndDrop" */ '@/view/uiElements/DragAndDrop.vue'),
      },
      {
        path: 'alerts',
        name: 'alerts',
        component: () => import(/* webpackChunkName: "Alerts" */ '@/view/uiElements/Alerts.vue'),
      },
      {
        path: 'avatar',
        name: 'avatar',
        component: () => import(/* webpackChunkName: "Avatar" */ '@/view/uiElements/Avatar.vue'),
      },
      {
        path: 'badge',
        name: 'badge',
        component: () => import(/* webpackChunkName: "Badge" */ '@/view/uiElements/Badge.vue'),
      },
      {
        path: 'breadcrumb',
        name: 'breadcrumb',
        component: () => import(/* webpackChunkName: "Breadcrumb" */ '@/view/uiElements/Breadcrumb.vue'),
      },
      {
        path: 'calendar',
        name: 'calendars',
        component: () => import(/* webpackChunkName: "Calendars" */ '@/view/uiElements/Calendar'),
      },
      {
        path: 'cards',
        name: 'cards',
        component: () => import(/* webpackChunkName: "Cards" */ '@/view/uiElements/Cards'),
      },
      {
        path: 'button',
        name: 'button',
        component: () => import(/* webpackChunkName: "Button" */ '@/view/uiElements/Button.vue'),
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: () => import(/* webpackChunkName: "checkbox" */ '@/view/uiElements/Checkbox'),
      },
      {
        path: 'collapse',
        name: 'collapse',
        component: () => import(/* webpackChunkName: "Collapse" */ '@/view/uiElements/Collapse'),
      },
      {
        path: 'comments',
        name: 'comments',
        component: () => import(/* webpackChunkName: "Comments" */ '@/view/uiElements/Comments'),
      },
      {
        path: 'dash-base',
        name: 'dash-base',
        component: () => import(/* webpackChunkName: "DashboardBase" */ '@/view/uiElements/DashboardBase'),
      },
      {
        path: 'datePicker',
        name: 'datePicker',
        component: () => import(/* webpackChunkName: "DatePicker" */ '@/view/uiElements/DatePicker'),
      },
      {
        path: 'drawer',
        name: 'drawer',
        component: () => import(/* webpackChunkName: "Drawer" */ '@/view/uiElements/Drawer'),
      },
      {
        path: 'empty',
        name: 'empty',
        component: () => import(/* webpackChunkName: "Empty" */ '@/view/uiElements/Empty'),
      },
      {
        path: 'grid',
        name: 'grid-list',
        component: () => import(/* webpackChunkName: "GridList" */ '@/view/uiElements/Grid'),
      },
      {
        path: 'dropdown',
        name: 'dropdown',
        component: () => import(/* webpackChunkName: "Dropdown" */ '@/view/uiElements/Dropdown'),
      },
      {
        path: 'input',
        name: 'input',
        component: () => import(/* webpackChunkName: "Input" */ '@/view/uiElements/Input'),
      },
      {
        path: 'list',
        name: 'lists',
        component: () => import(/* webpackChunkName: "List" */ '@/view/uiElements/List'),
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import(/* webpackChunkName: "Menu" */ '@/view/uiElements/Menu'),
      },
      {
        path: 'message',
        name: 'message',
        component: () => import(/* webpackChunkName: "Message" */ '@/view/uiElements/Message'),
      },
      {
        path: 'autoComplete',
        name: 'autoComplete',
        component: () => import(/* webpackChunkName: "auto-complete" */ '@/view/uiElements/AutoComplete'),
      },
      {
        path: 'carousel',
        name: 'carousel',
        component: () => import(/* webpackChunkName: "carousel" */ '@/view/uiElements/Carousel'),
      },
      {
        path: 'cascader',
        name: 'cascader',
        component: () => import(/* webpackChunkName: "cascader" */ '@/view/uiElements/Cascader'),
      },
      {
        path: 'modal',
        name: 'modal',
        component: () => import(/* webpackChunkName: "Modal" */ '@/view/uiElements/Modal'),
      },
      {
        path: 'notification',
        name: 'notification',
        component: () => import(/* webpackChunkName: "Notification" */ '@/view/uiElements/Notification'),
      },
      {
        path: 'pageHeader',
        name: 'pageHeader',
        component: () => import(/* webpackChunkName: "Page-header" */ '@/view/uiElements/PageHeader'),
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: () => import(/* webpackChunkName: "Pagination" */ '@/view/uiElements/Pagination'),
      },
      {
        path: 'popConfirm',
        name: 'popConfirm',
        component: () => import(/* webpackChunkName: "PopConfirm" */ '@/view/uiElements/PopConfirm'),
      },
      {
        path: 'popover',
        name: 'popover',
        component: () => import(/* webpackChunkName: "Popover" */ '@/view/uiElements/Popover'),
      },
      {
        path: 'progressbar',
        name: 'progressbar',
        component: () => import(/* webpackChunkName: "ProgressBar" */ '@/view/uiElements/Progressbar'),
      },
      {
        path: 'radio',
        name: 'radio',
        component: () => import(/* webpackChunkName: "Radio" */ '@/view/uiElements/Radio'),
      },
      {
        path: 'rate',
        name: 'rate',
        component: () => import(/* webpackChunkName: "Rate" */ '@/view/uiElements/Rate'),
      },
      {
        path: 'result',
        name: 'result',
        component: () => import(/* webpackChunkName: "Result" */ '@/view/uiElements/Result'),
      },
      {
        path: 'select',
        name: 'select',
        component: () => import(/* webpackChunkName: "Select" */ '@/view/uiElements/Select'),
      },
      {
        path: 'skeleton',
        name: 'skeleton',
        component: () => import(/* webpackChunkName: "Skeleton" */ '@/view/uiElements/Skeleton'),
      },
      {
        path: 'slider',
        name: 'slider',
        component: () => import(/* webpackChunkName: "Sliders" */ '@/view/uiElements/Slider'),
      },
      {
        path: 'spiner',
        name: 'spiner',
        component: () => import(/* webpackChunkName: "Spiner" */ '@/view/uiElements/Spiner'),
      },
      {
        path: 'statistic',
        name: 'statistic',
        component: () => import(/* webpackChunkName: "Statistic" */ '@/view/uiElements/Statistic'),
      },
      {
        path: 'steps',
        name: 'steps',
        component: () => import(/* webpackChunkName: "Steps" */ '@/view/uiElements/Steps'),
      },
      {
        path: 'switch',
        name: 'switch',
        component: () => import(/* webpackChunkName: "Switch" */ '@/view/uiElements/Switch'),
      },
      {
        path: 'tabs',
        name: 'tab',
        component: () => import(/* webpackChunkName: "Tabs" */ '@/view/uiElements/Tab'),
      },
      {
        path: 'tags',
        name: 'tag',
        component: () => import(/* webpackChunkName: "Tags" */ '@/view/uiElements/Tags'),
      },
      {
        path: 'timeline',
        name: 'timelines',
        component: () => import(/* webpackChunkName: "Timelines" */ '@/view/uiElements/Timeline'),
      },
      {
        path: 'time-picker',
        name: 'time-picker',
        component: () => import(/* webpackChunkName: "TimePicker" */ '@/view/uiElements/TimePicker'),
      },
      {
        path: 'tree-select',
        name: 'tree-select',
        component: () => import(/* webpackChunkName: "TreeSelect" */ '@/view/uiElements/TreeSelect'),
      },
      {
        path: 'upload',
        name: 'upload',
        component: () => import(/* webpackChunkName: "Upload" */ '@/view/uiElements/Upload'),
      },
    ],
  },
];
