<template>
  <div>
    <sdPageHeader title="New Page" class="ninjadash-page-header-main">
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <sdCards headless>
            <div class="ninjadash-template-documentation">
              <h2>How to create new page</h2>
              <p>
                Here is the example on how to create your custom page and add it
                to the left sidebar menu, breadcrumbs.
              </p>
              <p class="mb-0">
                1. Create page component
                <code>src/views/pages/MyPage.vue</code>
              </p>
              <prism-editor
                :readonly="true"
                class="my-editor height-100"
                v-model="page"
                :highlight="highlighter"
              ></prism-editor>

              <p class="mb-0">
                2. Update the routes <code>src/router/pageRoutes.ts</code>
              </p>
              <prism-editor
                :readonly="true"
                class="my-editor height-100"
                v-model="routes"
                :highlight="highlighter"
              ></prism-editor>
              <p class="mt-35 mb-0">
                3. Then update the menu item
                <code>src/layout/Aside.vue </code>
              </p>
              <prism-editor
                :readonly="true"
                class="my-editor height-100"
                v-model="aside"
                :highlight="highlighter"
              ></prism-editor>
            </div>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { defineComponent, ref } from "vue";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default defineComponent({
  name: "BlankPage",
  components: {
    Main,
    PrismEditor,
  },
  setup() {
    const page = ref(`<template>
  <div>
    <sdPageHeader title="Blank Page" class="ninjadash-page-header-main"></sdPageHeader>
    <Main>
      Write your vue code
    </Main>
  </div>
</template>

<script lang="ts">
import { Main } from "../styled";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewPage",
  components: {
    Main,
  },
});
< /script>`);

    const routes = ref(
      `
const routes = [
  {
    path: '/new-page',
    name: 'new-page',
    component: () => import('@/views/pages/MyPage.vue'),
  },
];

export default routes;
`
    );

    const aside = ref(`
<template>
  <a-menu
    :open-keys="openKeys"
  >
    <a-menu-item @click="toggleCollapsed" key="new-page">
      <template #icon>
        <unicon name="circle"></unicon>
      </template>
      <router-link to="/new-page"> New Page </router-link>
    </a-menu-item>
  </a-menu>
</template>
    `);

    return {
      page,
      routes,
      aside,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
