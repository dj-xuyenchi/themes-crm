<template>
  <div>
    <sdPageHeader title="Line Charts" class="ninjadash-page-header-main">

    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Line Chart">
            <line-chart />
          </sdCards>
          <sdCards title="Gradient Line Chart">
            <gradient />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Line Chart with Data Labels">
            <line-with-data />
          </sdCards>
          <sdCards title="Dashed Line Chart">
            <dashed />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../../styled";
import LineChart from "../../../components/apexcharts/line-chart/BasicLine";
import LineWithData from "../../../components/apexcharts/line-chart/LineWithData";
import Gradient from "../../../components/apexcharts/line-chart/Gradient";
import Dashed from "../../../components/apexcharts/line-chart/Dashed";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Chartjs",
  components: {
    Main,
    LineChart,
    LineWithData,
    Gradient,
    Dashed,
  },
});
</script>
