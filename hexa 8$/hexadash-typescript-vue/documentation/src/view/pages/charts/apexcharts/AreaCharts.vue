<template>
  <div>
    <sdPageHeader title="Area Charts" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Area Chart">
            <basic />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="basicData"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Spline Area Chart">
            <spline />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="splineData"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../../../styled";
import Basic from "@/components/apexcharts/area-charts/Basic";
import Spline from "@/components/apexcharts/area-charts/Spline";
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
    Main,
    Basic,
    Spline,
    PrismEditor,
  },
  data() {
    return {
      basicData: `
<template>  
    <apexchart 
      type="area" 
      :options="chartOptions" 
      :series="series"
    ></apexchart> 
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'BasicAreaChart',
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
      splineData: `
<template>  
    <apexchart type="area" 
      :options="chartOptions" 
      :series="series"
    ></apexchart>  
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'SplineAreaChart',
    components: {},
    data() {
      return {
        chartOptions: {
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          },
          tooltip: {
            fixed: {
              enabled: false,
              position: 'topRight',
            },
          },
        },
        series: [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100],
          },
          {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ],
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
