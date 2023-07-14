<template>
  <SalesOverviewStyleWrap2>
    <sdCards v-if="salesOverviewData !== null" title="Sales Overview">
      <template #button>
        <div class="ninjadash-card-nav">
          <ul>
            <li
              :class="
                overviewTab === 'today'
                  ? 'ninjadash-active'
                  : 'ninjadash-deactivate'
              "
            >
              <router-link
                type="button"
                @click="(e) => handleTabActivation('today', e)"
                to="#"
              >
                Today
              </router-link>
            </li>
            <li
              :class="
                overviewTab === 'week'
                  ? 'ninjadash-active'
                  : 'ninjadash-deactivate'
              "
            >
              <router-link
                @click="(e) => handleTabActivation('week', e)"
                to="#"
              >
                Week
              </router-link>
            </li>
            <li
              :class="
                overviewTab === 'month'
                  ? 'ninjadash-active'
                  : 'ninjadash-deactivate'
              "
            >
              <router-link
                @click="(e) => handleTabActivation('month', e)"
                to="#"
              >
                Month
              </router-link>
            </li>
          </ul>
        </div>
      </template>
      <div class="ninjadash-overview-wrap">
        <div
          class="ninjadash-overview-wrap__inner"
          :style="{ height: height + 'px' }"
        >
          <DoughnutChart
            v-if="!isLoading"
            type="doughnut"
            id="salesOverview"
            className="salesOverview"
            :labels="labels"
            :datasets="datasets"
            :height="height"
            :options="options"
            :tooltip="{
              backgroundColor: '#FFF',
              titleFontSize: 16,
              titleFontColor: '#0066ff',
              bodyFontColor: '#000',
              bodyFontSize: 14,
              displayColors: false,

              callbacks: {
                title(t) {
                  console.log(t);
                },
              },
            }"
          />
        </div>

        <div class="ninjadash-overview-percentage">
          <div
            v-for="(value, index) in salesOverviewData"
            class="ninjadash-overview-percentage__item"
            :key="index"
          >
            <span
              class="ninjadash-overview-percentage__point"
              :style="{
                backgroundColor: datasets[0].backgroundColor[index],
              }"
            />
            <span class="ninjadash-overview-percentage__text"
              >{{ Math.round((value / totalSale) * 100) }}%</span
            >
          </div>
        </div>

        <div
          class="ninjadash-overview-box align-center-v justify-content-between"
        >
          <div
            v-for="(value, index) in salesOverviewData"
            class="ninjadash-overview-box-item"
            :key="index"
          >
            <h4>{{ value.toLocaleString() }}</h4>
            <p>{{ labels[index] }}</p>
          </div>
        </div>
      </div>
    </sdCards>
  </SalesOverviewStyleWrap2>
</template>
<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import DoughnutChart from "@/components/utilities/DoughnutChart.vue";
import { SalesOverviewStyleWrap2 } from "../../style";
import { themeColor } from "@/config/theme/themeVariables";
import chartContent from "../../../../demoData/dashboardChartContent.json";
import { useStore } from "vuex";

const { SalesOverviewData } = chartContent;
const labels = ["Shirt", "Pant", "Footwear"];

export default defineComponent({
  components: { SalesOverviewStyleWrap2, DoughnutChart },
  setup() {
    const overviewTab = ref("today");
    const salesOverviewData = ref(null);
    const totalSale = ref(null);
    const isLoading = ref(false);
    const height = 200;
    const { state } = useStore();
    const mainContent = computed(() => state.themeLayout.main);

    const handleTabActivation = (value, event) => {
      event.preventDefault();
      isLoading.value = true;
      overviewTab.value = value;
      salesOverviewData.value = SalesOverviewData[overviewTab.value];
      totalSale.value =
        salesOverviewData.value !== null &&
        salesOverviewData.value.reduce((a, b) => a + b, 0);
      setTimeout(() => {
        isLoading.value = false;
      }, 0);
    };

    onMounted(() => {
      salesOverviewData.value = SalesOverviewData[overviewTab.value];
      totalSale.value = SalesOverviewData[overviewTab.value].reduce(
        (a, b) => a + b,
        0
      );
    });

    const datasets = computed(() => {
      return [
        {
          data: salesOverviewData.value,
          backgroundColor: ["#FA8B0C", "#8231D3", "#5840FF"],
          centerText: "$7.9K",
          centerTextLabel: "Revenue",
        },
      ];
    });

    const options = {
      cutout: 62,
      borderWidth: 2,
      maintainAspectRatio: false,
      responsive: false,
      borderColor: `${themeColor[mainContent.value]["white-background"]}`,
      plugins: {
        legend: {
          display: false,
        },
        labels: {
          display: false,
        },
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    };

    return {
      overviewTab,
      salesOverviewData,
      handleTabActivation,
      datasets,
      options,
      labels,
      totalSale,
      isLoading,
      height,
    };
  },
});
</script>
