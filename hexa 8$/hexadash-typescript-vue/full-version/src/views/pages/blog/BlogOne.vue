<script setup lang="ts">
import { Main } from '../../styled';
import cardData from '@/demoData/sampleCards.json';
import BlogCard from '@/components/cards/BlogCard.vue';

const pageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'blog',
    breadcrumbName: 'Blog',
  },
];

const BlogCardData = cardData.BlogCardData.slice(0, 9);
</script>

<template>
  <sdPageHeader title="Blog One" :routes="pageRoutes" class="ninjadash-page-header-main"></sdPageHeader>

  <Main>
    <a-row :gutter="25">
      <a-col v-for="blog in BlogCardData" :key="blog.id" :xxl="8" :sm="12" :xs="24">
        <BlogCard :item="blog" />
      </a-col>
    </a-row>
  </Main>
</template>
