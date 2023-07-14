export default [
  {
    path: '/components',
    name: 'components',
    component: () => import('@/views/uiElements/Index.vue'),
    children: [
      {
        path: 'drag-drop',
        name: 'drag',
        component: () => import('@/views/uiElements/DragAndDrop.vue'),
      },
      {
        path: 'alerts',
        name: 'alerts',
        component: () => import('@/views/uiElements/Alerts.vue'),
      },
      {
        path: 'avatar',
        name: 'avatar',
        component: () => import('@/views/uiElements/Avatar.vue'),
      },
      {
        path: 'badge',
        name: 'badge',
        component: () => import('@/views/uiElements/Badge.vue'),
      },
      {
        path: 'breadcrumb',
        name: 'breadcrumb',
        component: () => import('@/views/uiElements/Breadcrumb.vue'),
      },
      {
        path: 'calendar',
        name: 'calendars',
        component: () => import('@/views/uiElements/Calendar.vue'),
      },
      {
        path: 'cards',
        name: 'cards',
        component: () => import('@/views/uiElements/Cards.vue'),
      },
      {
        path: 'button',
        name: 'button',
        component: () => import('@/views/uiElements/Button.vue'),
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: () => import('@/views/uiElements/Checkbox.vue'),
      },
      {
        path: 'collapse',
        name: 'collapse',
        component: () => import('@/views/uiElements/Collapse.vue'),
      },
      {
        path: 'comments',
        name: 'comments',
        component: () => import('@/views/uiElements/Comments.vue'),
      },
      {
        path: 'dash-base',
        name: 'dash-base',
        component: () => import('@/views/uiElements/DashboardBase.vue'),
      },
      {
        path: 'datePicker',
        name: 'datePicker',
        component: () => import('@/views/uiElements/DatePicker.vue'),
      },
      {
        path: 'drawer',
        name: 'drawer',
        component: () => import('@/views/uiElements/Drawer.vue'),
      },
      {
        path: 'empty',
        name: 'empty',
        component: () => import('@/views/uiElements/Empty.vue'),
      },
      {
        path: 'grid',
        name: 'grid-list',
        component: () => import('@/views/uiElements/Grid.vue'),
      },
      {
        path: 'dropdown',
        name: 'dropdown',
        component: () => import('@/views/uiElements/Dropdown.vue'),
      },
      {
        path: 'input',
        name: 'input',
        component: () => import('@/views/uiElements/Input.vue'),
      },
      {
        path: 'list',
        name: 'lists',
        component: () => import('@/views/uiElements/List.vue'),
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/views/uiElements/Menu.vue'),
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/uiElements/Message.vue'),
      },
      {
        path: 'autoComplete',
        name: 'autoComplete',
        component: () => import('@/views/uiElements/AutoComplete.vue'),
      },
      {
        path: 'carousel',
        name: 'carousel',
        component: () => import('@/views/uiElements/Carousel.vue'),
      },
      {
        path: 'cascader',
        name: 'cascader',
        component: () => import('@/views/uiElements/Cascader.vue'),
      },
      {
        path: 'modal',
        name: 'modal',
        component: () => import('@/views/uiElements/Modal.vue'),
      },
      {
        path: 'notification',
        name: 'notification',
        component: () => import('@/views/uiElements/Notification.vue'),
      },
      {
        path: 'pageHeader',
        name: 'pageHeader',
        component: () => import('@/views/uiElements/PageHeader.vue'),
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: () => import('@/views/uiElements/Pagination.vue'),
      },
      {
        path: 'popConfirm',
        name: 'popConfirm',
        component: () => import('@/views/uiElements/PopConfirm.vue'),
      },
      {
        path: 'popover',
        name: 'popover',
        component: () => import('@/views/uiElements/Popover.vue'),
      },
      {
        path: 'progressbar',
        name: 'progressbar',
        component: () => import('@/views/uiElements/Progressbar.vue'),
      },
      {
        path: 'radio',
        name: 'radio',
        component: () => import('@/views/uiElements/Radio.vue'),
      },
      {
        path: 'rate',
        name: 'rate',
        component: () => import('@/views/uiElements/Rate.vue'),
      },
      {
        path: 'result',
        name: 'result',
        component: () => import('@/views/uiElements/Result.vue'),
      },
      {
        path: 'select',
        name: 'select',
        component: () => import('@/views/uiElements/Select.vue'),
      },
      {
        path: 'skeleton',
        name: 'skeleton',
        component: () => import('@/views/uiElements/Skeleton.vue'),
      },
      {
        path: 'slider',
        name: 'slider',
        component: () => import('@/views/uiElements/Slider.vue'),
      },
      {
        path: 'spiner',
        name: 'spiner',
        component: () => import('@/views/uiElements/Spiner.vue'),
      },
      {
        path: 'statistic',
        name: 'statistic',
        component: () => import('@/views/uiElements/Statistic.vue'),
      },
      {
        path: 'steps',
        name: 'steps',
        component: () => import('@/views/uiElements/Steps.vue'),
      },
      {
        path: 'switch',
        name: 'switch',
        component: () => import('@/views/uiElements/Switch.vue'),
      },
      {
        path: 'tabs',
        name: 'tab',
        component: () => import('@/views/uiElements/Tab.vue'),
      },
      {
        path: 'tags',
        name: 'tag',
        component: () => import('@/views/uiElements/Tags.vue'),
      },
      {
        path: 'timeline',
        name: 'timelines',
        component: () => import('@/views/uiElements/Timeline.vue'),
      },
      {
        path: 'time-picker',
        name: 'time-picker',
        component: () => import('@/views/uiElements/TimePicker.vue'),
      },
      {
        path: 'tree-select',
        name: 'tree-select',
        component: () => import('@/views/uiElements/TreeSelect.vue'),
      },
      {
        path: 'upload',
        name: 'upload',
        component: () => import('@/views/uiElements/Upload.vue'),
      },
    ],
  },
];
