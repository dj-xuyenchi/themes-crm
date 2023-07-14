<template>
  <canvas :class="className" :id="id" :style="style" :height="height"></canvas>
</template>
<script lang="ts">
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';
import { defineComponent, toRefs, watchEffect } from 'vue';
import { customTooltips } from './utilities';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
);

export default defineComponent({
  name: 'ChartJs',
  props: {
    type: {
      type: String,
      default: 'line',
    },
    className: {
      type: String,
      required: true,
      default: 'bar',
    },
    id: {
      type: String,
      required: true,
      default: 'bar',
    },
    style: {
      type: Object,
      default: function () {
        return { marginBottom: '20px' };
      },
    },
    labels: {
      type: Array,
      default: function () {
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      },
    },
    height: {
      type: Number,
      default: 479,
    },
    scales: {
      type: Object,
      default: function () {
        return {
          y: {
            beginAtZero: true,
            grid: {
              color: '#485e9029',
              borderDash: [3, 3],
              zeroLineColor: '#485e9029',
              zeroLineWidth: 1,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 14,
              fontFamily: 'Jost',
              color: '#8C90A4',
              max: 80,
              stepStartValue: 5,
              stepSize: 20,
              padding: 10,
              callback: function (label: string) {
                return label + 'k';
              },
            },
          },
          x: {
            grid: {
              display: false,
              drawBorder: false,
              zeroLineWidth: 0,
              color: 'transparent',
              z: 1,
            },
            ticks: {
              beginAtZero: true,
              fontSize: 14,
              fontFamily: 'Jost',
              color: '#8C90A4',
            },
          },
        };
      },
    },
    datasets: {
      type: Array,
      default: function () {
        return [
          {
            data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
            backgroundColor: '#001737',
            barPercentage: 0.6,
            label: 'Profit',
          },
          {
            data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
            backgroundColor: '#1ce1ac',
            barPercentage: 0.6,
            label: 'Lose',
          },
        ];
      },
    },
    layout: {
      type: Object,
      default: function () {
        return {};
      },
    },
    legend: {
      type: Object,
      default: function () {
        return {
          display: false,
          labels: {
            display: false,
            position: 'center',
          },
        };
      },
    },
    elements: {
      type: Object,
      default: function () {
        return {
          line: {
            tension: 0.6,
            borderCapStyle: 'round',
            borderJoinStyle: 'round',
            capBezierPoints: true,
          },
          point: {
            radius: 0,
            z: 5,
          },
        };
      },
    },
    options: {
      type: Object,
      default: function () {
        return {};
      },
    },
    tooltip: {
      type: Object,
      default: () => ({
        callbacks: {
          label(t: any) {
            const dstLabel = t.dataset.label;
            const { formattedValue } = t;
            return `  ${formattedValue} ${dstLabel}`;
          },
          labelColor(t: any) {
            return {
              backgroundColor: t.dataset.hoverBackgroundColor,
              borderColor: 'transparent',
            };
          },
        },
      }),
    },
  },
  setup(props) {
    const { type, datasets, options, labels, id, tooltip, scales, elements, legend, layout }: any = toRefs(props);

    watchEffect(() => {
      setTimeout(() => {
        const chartElement = document.getElementById(`${id.value}`) as HTMLCanvasElement;

        new Chart(chartElement, {
          type: type.value,
          data: {
            labels: labels.value,
            datasets: datasets.value,
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            layout,
            hover: {
              mode: 'index',
              intersect: false,
            },
            plugins: {
              legend: legend.value,
              tooltip: {
                yAlign: 'bottom',
                mode: 'index',
                intersect: false,
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 5px #ADB5D915',
                position: 'average',
                titleColor: '#ADB5D9',
                color: '#ADB5D9',
                titleFontSize: 12,
                titleSpacing: 10,
                bodyColor: '#404040',
                bodyFontSize: 11,
                bodyFontStyle: 'normal',
                bodyFontFamily: "'Jost', sans-serif",
                borderColor: '#F1F2F6',
                usePointStyle: true,
                borderWidth: 1,
                bodySpacing: 10,
                padding: {
                  x: 10,
                  y: 8,
                },
                z: 999999,
                enabled: false,
                external: customTooltips,
                ...tooltip.value,
              },
            },
            elements: elements.value,
            scales: scales.value,
            ...options.value,
          },
        });
      }, 1000);
    });
  },
});
</script>
