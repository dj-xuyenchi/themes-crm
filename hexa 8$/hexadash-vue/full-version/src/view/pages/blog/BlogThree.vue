<template>
  <sdPageHeader title="Blog Three" :routes="pageRoutes" class="ninjadash-page-header-main"></sdPageHeader>

  <Main>
    <a-row :gutter="25">
      <a-col
        v-for="blog in BlogCardData"
        :key="blog.id"
        :xxl="6"
        :sm="12"
        :xs="24"
      >
        <BlogCard :item="blog" theme="style-3" />
      </a-col>
    </a-row>
  </Main>
</template>
<script>
import { Main } from "../../styled";
import { defineComponent } from "vue";
import cardData from "@/demoData/sampleCards.json";
import BlogCard from "@/components/cards/BlogCard.vue";

const pageRoutes = [
  {
    path: "index",
    breadcrumbName: "Dashboard",
  },
  {
    path: "blog3",
    breadcrumbName: "Blog Three",
  },
];

const Blog3 = defineComponent({
  name: "Blog3",
  components: {
    Main,
    BlogCard,
  },
  setup() {
    const BlogCardData = cardData.BlogCardData.slice(0, 9);
    return {
      pageRoutes,
      BlogCardData,
    };
  },
});

export default Blog3;
</script>
