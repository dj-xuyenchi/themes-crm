export default [
  {
    path: '/chart',
    name: 'charts',
    component: () => import('@/views/charts/Index.vue'),
    children: [
      {
        path: 'google-chart',
        name: 'googleChart',
        component: () => import('@/views/charts/GoogleCharts.vue'),
      },
      {
        path: 'chart-js',
        name: 'chart-js',
        component: () => import('@/views/charts/ChartJs.vue'),
      },
    ],
  },
  {
    path: '/apexchart',
    name: 'apexchart',
    component: () => import('@/views/charts/Index.vue'),
    children: [
      {
        path: 'line-chart',
        name: 'lineChart',
        component: () => import('@/views/charts/apexcharts/LineCharts.vue'),
      },
      {
        path: 'area-chart',
        name: 'areaChart',
        component: () => import('@/views/charts/apexcharts/AreaCharts.vue'),
      },
      {
        path: 'column-chart',
        name: 'columnChart',
        component: () => import('@/views/charts/apexcharts/ColumnCharts.vue'),
      },
      {
        path: 'bar-chart',
        name: 'barChart',
        component: () => import('@/views/charts/apexcharts/BarCharts.vue'),
      },
      {
        path: 'pie-chart',
        name: 'pieChart',
        component: () => import('@/views/charts/apexcharts/PicCharts.vue'),
      },
      {
        path: 'radialbar-chart',
        name: 'radialbarChart',
        component: () => import('@/views/charts/apexcharts/RadialbarCharts.vue'),
      },
      {
        path: 'radar-charts',
        name: 'radarChart',
        component: () => import('@/views/charts/apexcharts/RadarCharts.vue'),
      },
    ],
  },
  {
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/forms/Index.vue'),
    children: [
      {
        path: 'form-layout',
        name: 'formLayout',
        component: () => import('@/views/forms/FormLayout.vue'),
      },
      {
        path: 'form-elements',
        name: 'formElements',
        component: () => import('@/views/forms/FormElements.vue'),
      },
      {
        path: 'form-components',
        name: 'formComponents',
        component: () => import('@/views/forms/FormComponents.vue'),
      },
      {
        path: '/forms/form-validation',
        name: 'formValidation',
        component: () => import('@/views/forms/FormValidation.vue'),
      },
    ],
  },
  {
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/table/Index.vue'),
    children: [
      {
        path: 'basic',
        name: 'table',
        component: () => import('@/views/table/Table.vue'),
      },
      {
        path: 'dataTable',
        name: 'datatable',
        component: () => import('@/views/table/DataTable.vue'),
      },
    ],
  },
  {
    path: '/widgets',
    name: 'widgets',
    component: () => import('@/views/widgets/Index.vue'),
    children: [
      {
        path: '/widgets/chart',
        name: 'widgetCharts',
        component: () => import('@/views/widgets/Charts.vue'),
      },
      {
        path: '/widgets/card',
        name: 'widgetCards',
        component: () => import('@/views/widgets/Cards.vue'),
      },
      {
        path: '/widgets/mixed',
        name: 'widgetMixed',
        component: () => import('@/views/widgets/Mixed.vue'),
      },
    ],
  },
  {
    path: '/wizard',
    name: 'wizard',
    component: () => import('@/views/wizards/Wizards.vue'),
    children: [
      {
        name: 'wizard1',
        path: 'wizard1',
        components: {
          default: () => import('@/views/wizards/Wizards.vue'),
          child: () => import('@/views/wizards/overview/WizardsOne.vue'),
        },
      },
    ],
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Index.vue'),
    children: [
      {
        path: 'unicons',
        name: 'unicons',
        component: () => import('@/views/icons/Unicons.vue'),
      },
			{
        path: 'featherIcons',
        name: 'featherIcons',
        component: () => import('@/views/icons/FeatherIcons.vue'),
      },
      {
        path: 'antdIcons',
        name: 'antdIcons',
        component: () => import('@/views/icons/AntdIcons.vue'),
      },
      {
        path: 'fa',
        name: 'fa',
        component: () => import('@/views/icons/FaIcons.vue'),
      },
    ],
  },
  {
    path: '/maps',
    name: 'maps',
    component: () => import('@/views/maps/Index.vue'),
    children: [
      {
        path: 'google',
        name: 'google',
        component: () => import('@/views/maps/GoogleMaps.vue'),
      },
      {
        path: 'leaflet',
        name: 'leaflet',
        component: () => import('@/views/maps/Leaflet.vue'),
      },
      {
        path: 'vector',
        name: 'vector',
        component: () => import('@/views/maps/Vector.vue'),
      },
    ],
  },
];
