<template>
  <div>
    <sdPageHeader title="Radialbar Charts" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Radialbar Chart">
            <basic />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="basic"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Custom Angle Circle Chart">
            <angle-circle />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="angle"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Gradient Circle Chart">
            <gradient />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="gradient"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Stroked Circle Chart">
            <stroked-gauge />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="stroke"
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
import Basic from "@/components/apexcharts/radialbar-charts/Basic";
import AngleCircle from "@/components/apexcharts/radialbar-charts/AngleCircle";
import Gradient from "@/components/apexcharts/radialbar-charts/Gradient";
import StrokedGauge from "@/components/apexcharts/radialbar-charts/StrokedGauge";
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
    AngleCircle,
    Gradient,
    StrokedGauge,
    PrismEditor,
  },
  data() {
    return {
      basic: `
<template>  
    <apexchart 
      type="radialBar" 
      height="350" 
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
        series: [70],
        chartOptions: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              },
            },
          },
          labels: ['Cricket'],
        },
      };
    },
  });
< /script>
      
      `,
      gradient: `
<template>  
    <apexchart 
      type="radialBar" 
      height="350" 
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
        series: [75],
        chartOptions: {
          chart: {
            height: 350,
            type: 'radialBar',
            toolbar: {
              show: true,
            },
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: '70%',
                background: '#fff',
                image: undefined,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24,
                },
              },
              track: {
                background: '#fff',
                strokeWidth: '67%',
                margin: 0, // margin is in pixels
                dropShadow: {
                  enabled: true,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35,
                },
              },
              dataLabels: {
                show: true,
                name: {
                  offsetY: -10,
                  show: true,
                  color: '#888',
                  fontSize: '17px',
                },
                value: {
                  formatter: function (val) {
                    return parseInt(val);
                  },
                  color: '#111',
                  fontSize: '36px',
                  show: true,
                },
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#ABE5A1'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: {
            lineCap: 'round',
          },
          labels: ['Percent'],
        },
      };
    },
  });
< /script>
      
      `,
      angle: `
<template> 
    <apexchart 
      type="radialBar" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart>  
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'AngleCircle',
    components: {},
    data() {
      return {
        series: [76, 67, 61, 90],
        chartOptions: {
          chart: {
            height: 390,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              offsetY: 0,
              startAngle: 0,
              endAngle: 270,
              hollow: {
                margin: 5,
                size: '20%',
                background: 'transparent',
                image: undefined,
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
          labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
          legend: {
            show: true,
            floating: true,
            fontSize: '14px',
            position: 'left',
            offsetX: 100,
            offsetY: 15,
            labels: {
              useSeriesColors: true,
            },
            markers: {
              size: 0,
            },
            formatter: function (seriesName, opts) {
              return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
            },
            itemMargin: {
              vertical: 3,
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                legend: {
                  show: false,
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
      stroke: `
<template>  
    <apexchart 
      type="radialBar" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart> 
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'StrokedGauge',
    components: {},
    data() {
      return {
        series: [67],
        chartOptions: {
          chart: {
            height: 350,
            type: 'radialBar',
            offsetY: -10,
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                name: {
                  fontSize: '16px',
                  color: undefined,
                  offsetY: 120,
                },
                value: {
                  offsetY: 76,
                  fontSize: '22px',
                  color: undefined,
                  formatter: function (val) {
                    return val + '%';
                  },
                },
              },
            },
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91],
            },
          },
          stroke: {
            dashArray: 4,
          },
          labels: ['Median Ratio'],
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
