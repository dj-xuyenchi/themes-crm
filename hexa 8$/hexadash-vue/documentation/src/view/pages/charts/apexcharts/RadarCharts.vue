<template>
  <div>
    <sdPageHeader title="Radar Charts" class="ninjadash-page-header-main">
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
          <sdCards title="Radar Multiple Series Chart">
            <radar-multiple-series />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="multi"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Radar With Polygon Fill Chart">
            <radar-with-polygon-fill />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="polygon"
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
import Basic from "@/components/apexcharts/radar-charts/Basic";
import RadarMultipleSeries from "@/components/apexcharts/radar-charts/RadarMultipleSeries";
import RadarWithPolygonFill from "@/components/apexcharts/radar-charts/RadarWithPolygonFill";
import { defineComponent } from "vue";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default defineComponent({
  name: "RadarCharts",
  components: {
    Main,
    Basic,
    RadarMultipleSeries,
    RadarWithPolygonFill,
    PrismEditor,
  },
  data() {
    return {
      basic: `
<template>  
    <apexchart 
      type="radar" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'BasicRadar',
    components: {},
    data() {
      return {
        series: [
          {
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
          },
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: 'radar',
          },
          title: {
            text: 'Basic Radar Chart',
          },
          xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June'],
          },
        },
      };
    },
  });
< /script>
      
      `,
      polygon: `
<template>  
    <apexchart 
      type="radar" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart> 
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'RadarWithPolygonFill',
  components: {},
  data() {
    return {
      series: [
        {
          name: 'Series 1',
          data: [20, 100, 40, 30, 50, 80, 33],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radar',
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff'],
              },
            },
          },
        },
        title: {
          text: 'Radar with Polygon Fill',
        },
        colors: ['#FF4560'],
        markers: {
          size: 4,
          colors: ['#fff'],
          strokeColor: '#FF4560',
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        xaxis: {
          categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function (val, i) {
              if (i % 2 === 0) {
                return val;
              } else {
                return '';
              }
            },
          },
        },
      },
    };
  },
});
< /script>      
      `,
      multi: `

<template>
  <apexchart 
    type="radar" 
    height="350" 
    :options="chartOptions" 
    :series="series"
  ></apexchart>
</template>

<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'RadarMultipleSeries',
    components: {},
    data() {
      return {
        series: [
          {
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
          },
          {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
          },
          {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
          },
        ],
        chartOptions: {
          chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1,
            },
          },
          title: {
            text: 'Radar Chart - Multi Series',
          },
          stroke: {
            width: 2,
          },
          fill: {
            opacity: 0.1,
          },
          markers: {
            size: 0,
          },
          xaxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
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
