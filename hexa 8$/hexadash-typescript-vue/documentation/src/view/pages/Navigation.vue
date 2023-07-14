<template>
  <div>
    <sdPageHeader
      title="Navigation"
      class="ninjadash-page-header-main"
      :routes="PageRoutes"
    >
    </sdPageHeader>
    <Main>
      <DocumentationStyleWrap>
        <a-row :gutter="25">
          <a-col :sm="24" :xs="24">
            <sdCards headless>
              <div class="ninjadash-template-documentation">
                <p>
                  Left sidebar Customization is very easy. If you want add,
                  remove or edit menu item form sidebar, please follow below
                  instructions.
                </p>
                <h2>How Add Menu ?</h2>
                <p>We can find our menu</p>

                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="htmlPage"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
          </a-col>
        </a-row>
      </DocumentationStyleWrap>
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
import { DocumentationStyleWrap } from "./style";

const PageRoutes = [
  {
    path: "index",
    breadcrumbName: "Docs",
  },
  {
    path: "",
    breadcrumbName: "Navigation",
  },
];

export default defineComponent({
  name: "Navigation",
  components: {
    Main,
    PrismEditor,
    DocumentationStyleWrap,
  },
  setup() {
    const htmlPage = ref(`
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

    <a-sub-menu key="dashboard">
      <template #icon>
        <unicon name="create-dashboard"></unicon>
      </template>
      <template #title>Dashboard</template>
      <a-menu-item @click="toggleCollapsed" key="demo-one">
        <router-link to="/demo-one"> Demo 1 </router-link>
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

`);

    return {
      htmlPage,
      PageRoutes,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
