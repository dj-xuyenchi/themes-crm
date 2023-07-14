<template>
  <div>
    <sdPageHeader title="Bar Charts" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Bar Chart">
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
          <sdCards title="Reverse Bar Chart">
            <reverse />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="reverseData"
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
import Basic from "@/components/apexcharts/bar-charts/BasicBar";
import Reverse from "@/components/apexcharts/bar-charts/ReversedBar";
import { defineComponent } from "vue";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default defineComponent({
  name: "BarCharts",
  components: {
    Main,
    Basic,
    Reverse,
    PrismEditor,
  },
  data() {
    return {
      basicData: `
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
    name: 'BasicBarChart',
    components: {},
    data() {
      return {
        series: [
          {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
          },
        ],
        chartOptions: {
          chart: {
            type: 'bar',
            height: 350,
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: [
              'South Korea',
              'Canada',
              'United Kingdom',
              'Netherlands',
              'Italy',
              'France',
              'Japan',
              'United States',
              'China',
              'Germany',
            ],
          },
        },
      };
    },
  });
< /script>
      
      `,
      reverseData: `
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
    name: 'ReversedBarChart',
    components: {},
    data() {
      return {
        series: [
          {
            data: [400, 430, 448, 470, 540, 580, 690],
          },
        ],
        chartOptions: {
          chart: {
            type: 'bar',
            height: 350,
          },
          annotations: {
            xaxis: [
              {
                x: 500,
                borderColor: '#00E396',
                label: {
                  borderColor: '#00E396',
                  style: {
                    color: '#fff',
                    background: '#00E396',
                  },
                  text: 'X annotation',
                },
              },
            ],
            yaxis: [
              {
                y: 'July',
                y2: 'September',
                label: {
                  text: 'Y annotation',
                },
              },
            ],
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: true,
          },
          xaxis: {
            categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
          },
          grid: {
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          yaxis: {
            reversed: true,
            axisTicks: {
              show: true,
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
