<template>
  <div>
    <sdPageHeader title="Banners" :routes="[]" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xxl="6" :xl="12" :lg="12" :sm="24" :xs="24">
          <Banner1 />
        </a-col>
        <a-col :xxl="6" :xl="12" :lg="12" :sm="24" :xs="24">
          <Banner2 />
        </a-col>
        <a-col :xxl="6" :xl="12" :lg="12" :sm="24" :xs="24">
          <Banner3 />
        </a-col>
        <a-col :xxl="6" :xl="12" :lg="12" :sm="24" :xs="24">
          <Banner4 />
        </a-col>
        <a-col :xxl="8" :xl="12" :lg="12" :sm="24" :xs="24">
          <Banner5 />
        </a-col>
        <a-col :xxl="8" :xl="12" :lg="12" :sm="24" :xs="24">
          <Banner6 />
        </a-col>
        <a-col :xxl="8" :xl="12" :lg="12" :sm="24" :xs="24">
          <Banner7 />
        </a-col>
      </a-row>
      <a-row :gutter="25">
        <a-col :xxl="4" :xl="12" :lg="12" :sm="24" :xs="24">
          <BannerCarousel />
        </a-col>
        <a-col :xxl="4" :xl="12" :lg="12" :sm="24" :xs="24">
          <BannerLong />
        </a-col>
        <a-col :xxl="8" :md="12" :xs="24">
          <BannerCard />
        </a-col>
        <a-col :xxl="8" :md="12" :xs="24">
          <BannerCard2 />
        </a-col>
      </a-row>
      <a-row :gutter="25">
        <a-col :xxl="12" :xs="24">
          <BannerCta />
        </a-col>
        <a-col :xxl="12" :xs="24">
          <BannerCta2 />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';

import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7,
  BannerCarousel,
  BannerLong,
  BannerCard,
  BannerCard2,
  BannerCta,
  BannerCta2,
} from '../../components/banners/Banners.vue';
</script>
