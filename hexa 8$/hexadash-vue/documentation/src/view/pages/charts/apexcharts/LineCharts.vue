<template>
  <div>
    <sdPageHeader title="Line Charts" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Line Chart">
            <line-chart />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="basicLine"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Gradient Line Chart">
            <gradient />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="gradientLine"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Line Chart with Data Labels">
            <line-with-data />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="dataLabel"
              :highlight="highlighter"
            ></prism-editor>
          </sdCards>
          <sdCards title="Dashed Line Chart">
            <dashed />
            <prism-editor
              :readonly="true"
              class="my-editor height-100 mb-35"
              v-model="dashLine"
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
import LineChart from "@/components/apexcharts/line-chart/BasicLine";
import LineWithData from "@/components/apexcharts/line-chart/LineWithData";
import Gradient from "@/components/apexcharts/line-chart/Gradient";
import Dashed from "@/components/apexcharts/line-chart/Dashed";
import { defineComponent } from "vue";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default defineComponent({
  name: "Chartjs",
  components: {
    Main,
    LineChart,
    LineWithData,
    Gradient,
    Dashed,
    PrismEditor,
  },
  data() {
    return {
      basicLine: `
<template> 
    <apexchart 
      type="line" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BasicLine',
  components: {},
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
});
< /script>

      `,
      gradientLine: `
<template>  
    <apexchart 
      type="line" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart> 
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Gradient',
  components: {},
  data() {
    return {
      series: [
        {
          name: 'Likes',
          data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          width: 7,
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '1/11/2000',
            '2/11/2000',
            '3/11/2000',
            '4/11/2000',
            '5/11/2000',
            '6/11/2000',
            '7/11/2000',
            '8/11/2000',
            '9/11/2000',
            '10/11/2000',
            '11/11/2000',
            '12/11/2000',
            '1/11/2001',
            '2/11/2001',
            '3/11/2001',
            '4/11/2001',
            '5/11/2001',
            '6/11/2001',
          ],
          tickAmount: 10,
          labels: {
            formatter: function (value, timestamp, opts) {
              return opts.dateFormatter(new Date(timestamp), 'dd MMM');
            },
          },
        },
        title: {
          text: 'Social Media',
          align: 'left',
          style: {
            fontSize: '16px',
            color: '#666',
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        markers: {
          size: 4,
          colors: ['#FFA41B'],
          strokeColors: '#fff',
          strokeWidth: 2,
          hover: {
            size: 7,
          },
        },
        yaxis: {
          min: -10,
          max: 40,
          title: {
            text: 'Engagement',
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
      type="line" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart>  
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LineWithData',
  components: {},
  data() {
    return {
      series: [
        {
          name: 'High - 2013',
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: 'Low - 2013',
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth',
        },
        title: {
          text: 'Average High & Low Temperature',
          align: 'left',
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          title: {
            text: 'Month',
          },
        },
        yaxis: {
          title: {
            text: 'Temperature',
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  },
});
< /script>

      `,
      dashLine: `
<template>  
    <apexchart 
      type="line" 
      height="350" 
      :options="chartOptions" 
      :series="series"
    ></apexchart>  
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'DashedLine',
  components: {},
  data() {
    return {
      series: [
        {
          name: 'Session Duration',
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: 'Page Views',
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: 'Total Visits',
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5],
        },
        title: {
          text: 'Page Statistics',
          align: 'left',
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '';
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            '01 Jan',
            '02 Jan',
            '03 Jan',
            '04 Jan',
            '05 Jan',
            '06 Jan',
            '07 Jan',
            '08 Jan',
            '09 Jan',
            '10 Jan',
            '11 Jan',
            '12 Jan',
          ],
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val + ' (mins)';
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val + ' per session';
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val;
                },
              },
            },
          ],
        },
        grid: {
          borderColor: '#f1f1f1',
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
