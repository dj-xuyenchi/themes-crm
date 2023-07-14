<template>
  <BorderLessHeading>
    <sdCards more title="Performance Overview">
      <template #more>
        <router-link to="#">
          <unicon name="print" width="16"></unicon>
          <span>Printer</span>
        </router-link>
        <router-link to="#">
          <unicon name="book-open" width="16"></unicon>
          <span>PDF</span>
        </router-link>
        <router-link to="#">
          <unicon name="file-alt" width="16"></unicon>
          <span>Google Sheets</span>
        </router-link>
        <router-link to="#">
          <unicon name="x" width="16"></unicon>
          <span>Excel (XLSX)</span>
        </router-link>
        <router-link to="#">
          <unicon name="file" width="16"></unicon>
          <span>CSV</span>
        </router-link>
      </template>
      <PerfomanceOverviewStyle>
        <div class="performance-chart-wrap">
          <div class="performance-chart">
            <apexchart
              type="radialBar"
              :options="chartOptions"
              :series="series"
              width="285px"
              height="285px"
            ></apexchart>
          </div>
          <div class="performance-chart-labels">
            <ul>
                <li v-for="(label, index) in labels" :class="`label-${label.replace(/\s+/g, '-').toLowerCase()}`" :key="index">{{ label }}</li>
            </ul>
          </div>
        </div>
      </PerfomanceOverviewStyle>
    </sdCards>
  </BorderLessHeading>
</template>
<script>
import { defineComponent, computed } from "vue";
import { PerfomanceOverviewStyle } from "../../style";
import { BorderLessHeading } from "../../../styled";
import { themeColor } from "@/config/theme/themeVariables";
import { useStore } from "vuex";
import VueApexCharts from "vue3-apexcharts";

export default defineComponent({
  components: {
    PerfomanceOverviewStyle,
    BorderLessHeading,
    apexchart: VueApexCharts
  },
  setup() {
    const { state } = useStore();
    const mainContent = computed(() => state.themeLayout.main);
    const labels = ['Target', 'Completed', 'In Progress'];
    const chartOptions = {
      colors: ['#8231D3', '#00AAFF', '#FA8B0C'],
      chart: {
        sparkline: {
          enabled: true
        }
      },
      legend: {
        show: false
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '28%'
          },
          track: {
            show: true,
            margin: 11
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: 20
            },
            value: {
              fontSize: '24px',
              fontFamily: '"Jost", sans-serif',
              fontWeight: 600,
              offsetY: -21
            },
            total: {
              show: true,
              label: 'Completed',
              fontSize: '16px',
              fontFamily: '"Jost", sans-serif',
              fontWeight: 400,
              color: `${themeColor[mainContent.value]["gray-color"]}`,
              formatter: function () {
                return '60%';
              }
            }
          }
        }
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          to: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      labels
    };
    const series = [90, 80, 70];

    return {
      mainContent,
      labels,
      chartOptions,
      series
    };
  },
});
</script>
