<template>
  <div>
    <sdPageHeader title="Radar Charts" class="ninjadash-page-header-main">

    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Radialbar Chart">
            <basic />
          </sdCards>
          <sdCards title="Radar Multiple Series Chart">
            <radar-multiple-series />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Radar With Polygon Fill Chart">
            <radar-with-polygon-fill />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../../styled";
import Basic from "../../../components/apexcharts/radar-charts/Basic";
import RadarMultipleSeries from "../../../components/apexcharts/radar-charts/RadarMultipleSeries";
import RadarWithPolygonFill from "../../../components/apexcharts/radar-charts/RadarWithPolygonFill";
import { defineComponent } from "vue";
export default defineComponent({
  name: "RadarCharts",
  components: {
    Main,
    Basic,
    RadarMultipleSeries,
    RadarWithPolygonFill,
  },
});
</script>
