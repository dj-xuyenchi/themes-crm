<template>
  <div>
    <sdPageHeader title="Column Charts" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Column Chart">
            <basic-column />
            <prism-editor
              :readonly="false"
              class="my-editor height-100 mb-35"
              v-model="basicChart"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Column with Negative Values">
            <column-with-negative-values />
            <prism-editor
              :readonly="false"
              class="my-editor height-100 mb-35"
              v-model="negativeColumn"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Column with Data Labels">
            <column-with-data-label />
            <prism-editor
              :readonly="false"
              class="my-editor height-100 mb-35"
              v-model="dataLabel"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Distributed Columns Chart">
            <distributed-columns />
            <prism-editor
              :readonly="false"
              class="my-editor height-100 mb-35"
              v-model="distributeLabel"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import BasicColumn from "@/components/apexcharts/column-charts/Basic";
import ColumnWithDataLabel from "@/components/apexcharts/column-charts/ColumnWithData";
import ColumnWithNegativeValues from "@/components/apexcharts/column-charts/ColumnWithNegativeValues";
import DistributedColumns from "@/components/apexcharts/column-charts/DistributedColumns";
import { Main } from "../../../styled";
import { defineComponent } from "vue";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default defineComponent({
  name: "AreaCharts",
  components: {
    BasicColumn,
    ColumnWithDataLabel,
    ColumnWithNegativeValues,
    DistributedColumns,
    Main,
    PrismEditor,
  },
  data() {
    return {
      basicChart: `
<template>  
    <apexchart 
      type="bar" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    >
    </apexchart>  
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BasicColumnChart',
  components: {},
  data() {
    return {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent'],
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)',
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands';
            },
          },
        },
      },
    };
  },
});
< /script>
`,

      negativeColumn: `
<template> 
    <apexchart 
      type="bar" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    >
    </apexchart>  
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ColumnWithNegativeValues',
  components: {},
  data() {
    return {
      series: [
        {
          name: 'Cash Flow',
          data: [
            1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1,
            13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4, -21.4,
            -2.4,
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350,
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -100,
                  to: -46,
                  color: '#F15B46',
                },
                {
                  from: -45,
                  to: 0,
                  color: '#FEB019',
                },
              ],
            },
            columnWidth: '80%',
          },
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          title: {
            text: 'Growth',
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + '%';
            },
          },
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2011-01-01',
            '2011-02-01',
            '2011-03-01',
            '2011-04-01',
            '2011-05-01',
            '2011-06-01',
            '2011-07-01',
            '2011-08-01',
            '2011-09-01',
            '2011-10-01',
            '2011-11-01',
            '2011-12-01',
            '2012-01-01',
            '2012-02-01',
            '2012-03-01',
            '2012-04-01',
            '2012-05-01',
            '2012-06-01',
            '2012-07-01',
            '2012-08-01',
            '2012-09-01',
            '2012-10-01',
            '2012-11-01',
            '2012-12-01',
            '2013-01-01',
            '2013-02-01',
            '2013-03-01',
            '2013-04-01',
            '2013-05-01',
            '2013-06-01',
            '2013-07-01',
            '2013-08-01',
            '2013-09-01',
          ],
          labels: {
            rotate: -90,
          },
        },
      },
    };
  },
});
< /script>

`,
      dataLabel: `
<template>  
    <apexchart 
      type="bar" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart> 
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ColumnWithDataLabel',
  components: {},
  data() {
    return {
      series: [
        {
          name: 'Inflation',
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + '%';
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758'],
          },
        },

        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          position: 'top',
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              },
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val + '%';
            },
          },
        },
        title: {
          text: 'Monthly Inflation in Argentina, 2002',
          floating: true,
          offsetY: 330,
          align: 'center',
          style: {
            color: '#444',
          },
        },
      },
    };
  },
});
< /script>

`,
      distributeLabel: `
<template>  
    <apexchart 
      type="bar" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart> 
</template>

<script>
import { defineComponent } from 'vue';
const colors = ['#008FFB', '#13D8AA', '#FF9800', '#E91E63', '#7D02EB', '#546E7A', '#1B998B', '#A300D6'];
export default defineComponent({
  name: 'DistributedColumns',
  components: {},
  data() {
    return {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function () {},
          },
        },
        colors: colors,
        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: '45%',
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'],
          ],
          labels: {
            style: {
              colors: colors,
              fontSize: '12px',
            },
          },
        },
      },
    };
  },
});
< /script>
`,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
