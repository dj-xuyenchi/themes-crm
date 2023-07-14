<script setup lang="ts">
import BasicColumn from '../../../components/apexcharts/column-charts/ColumnChartBasic.vue';
import ColumnWithDataLabel from '../../../components/apexcharts/column-charts/ColumnWithData.vue';
import ColumnWithNegativeValues from '../../../components/apexcharts/column-charts/ColumnWithNegativeValues.vue';
import DistributedColumns from '../../../components/apexcharts/column-charts/DistributedColumns.vue';
import { Main } from '../../styled';
</script>

<template>
  <div>
    <sdPageHeader title="Column Charts" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Column Chart">
            <basic-column />
          </sdCards>
          <sdCards title="Column with Negative Values">
            <column-with-negative-values />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Column with Data Labels">
            <column-with-data-label />
          </sdCards>
          <sdCards title="Distributed Columns Chart">
            <distributed-columns />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>
