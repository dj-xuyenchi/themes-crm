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
        <DoughnutChart
          :labels="labels"
          :datasets="datasets"
          :width="180"
          :height="180"
          :options="options"
          className="ninjadash-chartpoint-graph"
          id="ninjadash-chartpoint-graph"
        />
        <ChartPointHorizontal>
          <div class="ninjadash-chartpoint">
            <div
              v-for="(value, index) in datasets[0].data"
              class="ninjadash-chartpoint__item"
              :key="index"
            >
              <span
                class="ninjadash-chartpoint__tika"
                :style="{
                  backgroundColor: datasets[0].backgroundColor[index],
                }"
              />
              <span class="ninjadash-chartpoint__label">{{
                labels[index]
              }}</span>
            </div>
          </div>
        </ChartPointHorizontal>
      </PerfomanceOverviewStyle>
    </sdCards>
  </BorderLessHeading>
</template>
<script>
import { defineComponent, computed } from "vue";
import DoughnutChart from "@/components/utilities/DoughnutChart.vue";
import { PerfomanceOverviewStyle } from "../../style";
import { BorderLessHeading, ChartPointHorizontal } from "../../../styled";
import { themeColor } from "@/config/theme/themeVariables";
import { useStore } from "vuex";

const labels = ["Todo", "Completed", "In Progress"];

const datasets = [
  {
    data: [40, 15, 5],
    backgroundColor: ["#8231D3", "#5840FF", "#00E4EC"],
    centerText: "15%",
    centerTextLabel: "Completed",
  },
];

export default defineComponent({
  components: {
    DoughnutChart,
    PerfomanceOverviewStyle,
    BorderLessHeading,
    ChartPointHorizontal,
  },
  setup() {
    const { state } = useStore();
    const mainContent = computed(() => state.themeLayout.main);
    const options = {
      cutout: 70,
      maintainAspectRatio: false,
      responsive: false,
      borderWidth: 2,
      borderColor: `${themeColor[mainContent.value]["white-background"]}`,
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    return {
      datasets,
      labels,
      options,
    };
  },
});
</script>
