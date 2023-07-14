<template>
  <div>
    <sdPageHeader title="Radialbar Charts" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Radialbar Chart">
            <basic />
          </sdCards>
          <sdCards title="Custom Angle Circle Chart">
            <angle-circle />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Gradient Circle Chart">
            <gradient />
          </sdCards>
          <sdCards title="Stroked Circle Chart">
            <stroked-gauge />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../../styled";
import Basic from "../../../components/apexcharts/radialbar-charts/Basic";
import AngleCircle from "../../../components/apexcharts/radialbar-charts/AngleCircle";
import Gradient from "../../../components/apexcharts/radialbar-charts/Gradient";
import StrokedGauge from "../../../components/apexcharts/radialbar-charts/StrokedGauge";
import { defineComponent } from "vue";
export default defineComponent({
  name: "BarCharts",
  components: {
    Main,
    Basic,
    AngleCircle,
    Gradient,
    StrokedGauge,
  },
});
</script>
