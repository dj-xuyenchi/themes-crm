export default [
  {
    path: '/forms',
    name: 'forms',
    component: () => import(/* webpackChunkName: "Form" */ '@/view/forms/Index.vue'),
    children: [
      {
        path: 'form-layout',
        name: 'formLayout',
        component: () => import(/* webpackChunkName: "FormLayout" */ '@/view/forms/FormLayout.vue'),
      },
      {
        path: 'form-elements',
        name: 'formElements',
        component: () => import(/* webpackChunkName: "FormElements" */ '@/view/forms/FormElements.vue'),
      },
      {
        path: 'form-components',
        name: 'formComponents',
        component: () => import(/* webpackChunkName: "FormComponents" */ '@/view/forms/FormComponents.vue'),
      },
      {
        path: '/forms/form-validation',
        name: 'formValidation',
        component: () => import(/* webpackChunkName: "FormValidation" */ '@/view/forms/FormValidation.vue'),
      },
    ],
  },

  {
    path: '/chart',
    name: 'charts',
    component: () => import('@/view/charts/Index.vue'),
    children: [
      {
        path: 'google-chart',
        name: 'googleChart',
        component: () => import(/* webpackChunkName: "google-chart" */ '@/view/charts/GoogleCharts.vue'),
      },
      {
        path: 'chart-js',
        name: 'chart-js',
        component: () => import(/* webpackChunkName: "ChartJs" */ '@/view/charts/ChartJs.vue'),
      },
    ],
  },
  {
    path: '/apexchart',
    name: 'apexchart',
    component: () => import('@/view/charts/Index.vue'),
    children: [
      {
        path: 'line-chart',
        name: 'lineChart',
        component: () => import(/* webpackChunkName: "LineChart" */ '@/view/charts/apexcharts/LineCharts.vue'),
      },
      {
        path: 'area-chart',
        name: 'areaChart',
        component: () => import(/* webpackChunkName: "AreaChart" */ '@/view/charts/apexcharts/AreaCharts.vue'),
      },
      {
        path: 'column-chart',
        name: 'columnChart',
        component: () => import(/* webpackChunkName: "ColumChart" */ '@/view/charts/apexcharts/ColumnCharts.vue'),
      },
      {
        path: 'bar-chart',
        name: 'barChart',
        component: () => import(/* webpackChunkName: "BarCharts" */ '@/view/charts/apexcharts/BarCharts.vue'),
      },
      {
        path: 'pie-chart',
        name: 'pieChart',
        component: () => import(/* webpackChunkName: "PieCharts" */ '@/view/charts/apexcharts/PicCharts.vue'),
      },
      {
        path: 'radialbar-chart',
        name: 'radialbarChart',
        component: () =>
          import(/* webpackChunkName: "RadialbarCharts" */ '@/view/charts/apexcharts/RadialbarCharts.vue'),
      },
      {
        path: 'radar-charts',
        name: 'radarChart',
        component: () => import(/* webpackChunkName: "RadarCharts" */ '@/view/charts/apexcharts/RadarCharts.vue'),
      },
    ],
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import(/* webpackChunkName: "Icons" */ '@/view/icons/Index.vue'),
    children: [
      {
        path: 'unicons',
        name: 'unicons',
        component: () => import(/* webpackChunkName: "unicons" */ '@/view/icons/Unicons.vue'),
      },
			{
        path: 'featherIcons',
        name: 'featherIcons',
        component: () => import(/* webpackChunkName: "FeatherIcons" */ '@/view/icons/FeatherIcons.vue'),
      },
      {
        path: 'antdIcons',
        name: 'antdIcons',
        component: () => import(/* webpackChunkName: "AntdIcons" */ '@/view/icons/AntdIcons.vue'),
      },
      {
        path: 'fa',
        name: 'fa',
        component: () => import(/* webpackChunkName: "FaIcons" */ '@/view/icons/FaIcons.vue'),
      },
    ],
  },
  {
    path: '/maps',
    name: 'maps',
    component: () => import(/* webpackChunkName: "Maps" */ '@/view/maps/Index.vue'),
    children: [
      {
        path: 'google',
        name: 'google',
        component: () => import(/* webpackChunkName: "GoogleMaps" */ '@/view/maps/GoogleMaps.vue'),
      },
      {
        path: 'leaflet',
        name: 'leaflet',
        component: () => import(/* webpackChunkName: "Leaflet" */ '@/view/maps/Leaflet.vue'),
      },
      {
        path: 'vector',
        name: 'vector',
        component: () => import(/* webpackChunkName: "Vector" */ '@/view/maps/Vector.vue'),
      },
    ],
  },

  {
    path: '/wizard',
    name: 'wizard',
    component: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
    children: [
      {
        name: 'wizard1',
        path: 'wizard1',
        components: {
          default: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
          child: () => import(/* webpackChunkName: "wizard1" */ '@/view/wizards/overview/WizardsOne.vue'),
        },
      },
      {
        name: 'wizard2',
        path: 'wizard2',
        components: {
          default: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
          child: () => import(/* webpackChunkName: "wizard2" */ '@/view/wizards/overview/WizardsTwo.vue'),
        },
      },
      {
        name: 'wizard3',
        path: 'wizard3',
        components: {
          default: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
          child: () => import(/* webpackChunkName: "wizard3" */ '@/view/wizards/overview/WizardsThree.vue'),
        },
      },
      {
        name: 'wizard4',
        path: 'wizard4',
        components: {
          default: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
          child: () => import(/* webpackChunkName: "wizard4" */ '@/view/wizards/overview/WizardsFour.vue'),
        },
      },
      {
        name: 'wizard5',
        path: 'wizard5',
        components: {
          default: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
          child: () => import(/* webpackChunkName: "wizard5" */ '@/view/wizards/overview/WizardsFive.vue'),
        },
      },
      {
        name: 'wizard6',
        path: 'wizard6',
        components: {
          default: () => import(/* webpackChunkName: "wizard" */ '@/view/wizards/Wizards.vue'),
          child: () => import(/* webpackChunkName: "wizard6" */ '@/view/wizards/overview/WizardsSix.vue'),
        },
      },
    ],
  },

  {
    path: '/widgets',
    name: 'widgets',
    component: () => import(/* webpackChunkName: "widgets" */ '@/view/widgets/Index.vue'),
    children: [
      {
        path: '/widgets/chart',
        name: 'widgetCharts',
        component: () => import(/* webpackChunkName: "widgetsChart" */ '@/view/widgets/Charts.vue'),
      },
      {
        path: '/widgets/card',
        name: 'widgetCards',
        component: () => import(/* webpackChunkName: "widgetsCard" */ '@/view/widgets/Cards.vue'),
      },
      {
        path: '/widgets/mixed',
        name: 'widgetMixed',
        component: () => import(/* webpackChunkName: "widgetsMixed" */ '@/view/widgets/Mixed.vue'),
      },
    ],
  },

  {
    path: '/tables',
    name: 'tables',
    component: () => import('@/view/table/Index.vue'),
    children: [
      {
        path: 'basic',
        name: 'table',
        component: () => import('@/view/table/table'),
      },
      {
        path: 'dataTable',
        name: 'datatable',
        component: () => import('@/view/table/DataTable'),
      },
    ],
  },
];
