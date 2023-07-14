<template>
  <div>
    <sdPageHeader title="Bar Charts" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Simple Pie Chart">
            <basic />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="simple"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Gradient Donut">
            <gradient-donut />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="donut"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Simple Donut">
            <donut-pic />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="gradient"
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
import Basic from "@/components/apexcharts/pie-charts/BasicPic";
import DonutPic from "@/components/apexcharts/pie-charts/DonutPic";
import GradientDonut from "@/components/apexcharts/pie-charts/GradientDonut";
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
    DonutPic,
    GradientDonut,
    PrismEditor,
  },
  data() {
    return {
      simple: `
<template>  
    <apexchart 
      type="pie" 
      :options="chartOptions" 
      :series="series"
    ></apexchart>  
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'BasicPic',
    components: {},
    data() {
      return {
        series: [44, 55, 13, 43, 22],
        chartOptions: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
      };
    },
  });
< /script>

      `,
      gradient: `
<template>  
    <apexchart 
      type="donut" 
      :options="chartOptions" 
      :series="series"
    ></apexchart> 
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'DonutPic',
    components: {},
    data() {
      return {
        series: [44, 55, 41, 17, 15],
        chartOptions: {
          chart: {
            type: 'donut',
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
        },
      };
    },
  });
< /script>
      
      `,
      donut: `
<template>  
    <apexchart 
      type="donut" 
      :options="chartOptions" 
      :series="series"
    ></apexchart>  
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'GradientDonut',
    components: {},
    data() {
      return {
        series: [44, 55, 41, 17, 15],
        chartOptions: {
          chart: {
            width: 380,
            type: 'donut',
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270,
            },
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: 'gradient',
          },
          legend: {
            formatter: function (val, opts) {
              return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
            },
          },
          title: {
            text: 'Gradient Donut with custom Start-angle',
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
          ],
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
