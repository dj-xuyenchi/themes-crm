<template>
  <Cards more>
    <template #title>
      <div class="ninjadash-card-title-wrap">
        <span class="ninjadash-card-title-text"> Sales Overview </span>
      </div>
    </template>
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

    <SalesOverviewStyleWrap>
      <div class="ninjadash-sales-inner">
        <a-progress
          type="circle"
          :width="circleWidth"
          :percent="75"
          strokeColor="#8231D3"
          trailColor="#FFEAF3"
        />
        <div class="ninjadash-sales-content d-flex">
          <div
            className="ninjadash-sales-content__item"
            v-for="(item, i) in salesData"
            :key="i"
          >
            <span className="ninjadash-sales-content__item--label">{{
              item.status
            }}</span>
            <h4 className="ninjadash-sales-content__item--total">
              {{ item.salesCount }}
            </h4>
          </div>
        </div>
      </div>
    </SalesOverviewStyleWrap>
  </Cards>
</template>

<script>
import { defineComponent } from "vue";
import Cards from "../../../../components/cards/frame/CardsFrame.vue";
import { SalesOverviewStyleWrap } from "../../style";
import salesData from "../../../../demoData/salesData.json";

const SalesOverview = defineComponent({
  name: "SalesOverview",
  components: {
    SalesOverviewStyleWrap,
    Cards,
  },
  setup() {
    let circleWidth;
    circleWidth = 230;
    window.innerWidth <= 1499 ? (circleWidth = 180) : (circleWidth = 230);
    return {
      salesData,
      circleWidth,
    };
  },
});

export default SalesOverview;
</script>
