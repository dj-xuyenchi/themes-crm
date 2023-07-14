export default [
  {
    path: '/overview',
    name: 'overview',
    component: () => import(/* webpackChunkName: "Blank" */ '@/view/pages/Overview.vue'),
  },
  {
    path: '/credit',
    name: 'credit',
    component: () => import(/* webpackChunkName: "Credit" */ '@/view/pages/Credits.vue'),
  },
  {
    path: '/starter',
    name: 'starter',
    component: () => import(/* webpackChunkName: "Blank" */ '@/view/pages/BlankPage.vue'),
  },
  {
    path: '/dev',
    name: 'dev',
    component: () => import(/* webpackChunkName: "dev" */ '@/view/pages/Dev.vue'),
    children: [
          {
            path: 'installation',
            name: 'installation',
            component: () => import(/* webpackChunkName: "installation" */ '@/view/pages/Install.vue'),
          },
          {
            path: 'folder-structure',
            name: 'folder-structure',
            component: () => import(/* webpackChunkName: "Folder" */ '@/view/pages/FolderStructure.vue'),
          },
          {
            path: 'new-page',
            name: 'new-page',
            component: () => import(/* webpackChunkName: "NewPage" */ '@/view/pages/CreateStarterPage.vue'),
          },
          {
            path: 'theme-config',
            name: 'theme-config',
            component: () => import(/* webpackChunkName: "Theme-config" */ '@/view/pages/ThemeConfig.vue'),
          },
          {
            path: 'routing',
            name: 'routing',
            component: () => import(/* webpackChunkName: "Routing" */ '@/view/pages/Routing.vue'),
          },
          {
            path: 'navigation',
            name: 'navigation',
            component: () => import(/* webpackChunkName: "Navigation" */ '@/view/pages/Navigation.vue'),
          },
          {
            path: 'multi-lang',
            name: 'multi-lang',
            component: () => import(/* webpackChunkName: "multi-lang" */ '@/view/pages/MultiLang.vue'),
          },
          {
            path: 'vuex',
            name: 'vuex',
            component: () => import(/* webpackChunkName: "vuex" */ '@/view/pages/Vuex.vue'),
          },
        ]
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import(/* webpackChunkName: "Axios" */ '@/view/pages/AxiosIntegration.vue'),
  },
  {
    path: '/auth0',
    name: 'auth0',
    component: () => import(/* webpackChunkName: "auth0" */ '@/view/pages/Auth0.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "table" */ '@/view/pages/Table/Index.vue'),
    children: [
          {
            path: 'basic',
            name: 'basic',
            component: () => import(/* webpackChunkName: "BasicTable" */ '@/view/pages/Table/BasicTable.vue'),
          },
          {
            path: 'data',
            name: 'data',
            component: () => import(/* webpackChunkName: "dataTable" */ '@/view/pages/Table/DataTable.vue'),
          }
        ]
  },
  {
    path: '/charts',
    name: 'charts',
    component: () => import(/* webpackChunkName: "table" */ '@/view/pages/Index.vue'),
    children: [
          {
            path: 'chart-js',
            name: 'chart-js',
            component: () => import(/* webpackChunkName: "chartjs" */ '@/view/pages/charts/ChartJs.vue'),
          },
          {
            path: 'google-chart',
            name: 'google-chart',
            component: () => import(/* webpackChunkName: "GoogleChart" */ '@/view/pages/charts/GoogleChart.vue'),
          }
        ]
  },
  {
    path: '/apexchart',
    name: 'apexchart',
    component: () => import('@/view/pages/Index.vue'),
    children: [
      {
        path: 'line-chart',
        name: 'lineChart',
        component: () => import(/* webpackChunkName: "LineChart" */ '@/view/pages/charts/apexcharts/LineCharts.vue'),
      },
      {
        path: 'area-chart',
        name: 'areaChart',
        component: () => import(/* webpackChunkName: "AreaChart" */ '@/view/pages/charts/apexcharts/AreaCharts.vue'),
      },
      {
        path: 'column-chart',
        name: 'columnChart',
        component: () => import(/* webpackChunkName: "ColumChart" */ '@/view/pages/charts/apexcharts/ColumnCharts.vue'),
      },
      {
        path: 'bar-chart',
        name: 'barChart',
        component: () => import(/* webpackChunkName: "BarCharts" */ '@/view/pages/charts/apexcharts/BarCharts.vue'),
      },
      {
        path: 'pie-chart',
        name: 'pieChart',
        component: () => import(/* webpackChunkName: "PieCharts" */ '@/view/pages/charts/apexcharts/PicCharts.vue'),
      },
      {
        path: 'radialbar-chart',
        name: 'radialbarChart',
        component: () =>
          import(/* webpackChunkName: "RadialbarCharts" */ '@/view/pages/charts/apexcharts/RadialbarCharts.vue'),
      },
      {
        path: 'radar-charts',
        name: 'radarChart',
        component: () => import(/* webpackChunkName: "RadarCharts" */ '@/view/pages/charts/apexcharts/RadarCharts.vue'),
      },
    ],
  },
];
