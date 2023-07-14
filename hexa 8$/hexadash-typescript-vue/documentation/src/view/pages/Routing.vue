<template>
  <div>
    <sdPageHeader
      title="Routing"
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
                <h2>Routing</h2>
                <p>
                  HexaDash use vue-router as base routing system. To add a new
                  route in the template, you can follow the steps below.
                </p>
                <h2>Create new route</h2>
                <p>
                  We place all our pre and post login page components in
                  src/router/ folder. authRoutes.ts file is for authentication
                  and admin folder contains all admin panel routes. index.ts in
                  this folder is the entry point of all pages, you can basically
                  set your pages in this file.
                </p>

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
    breadcrumbName: "routing",
  },
];

export default defineComponent({
  name: "Routing",
  components: {
    Main,
    PrismEditor,
    DocumentationStyleWrap,
  },
  setup() {
    const htmlPage = ref(`
import PageRoutes from './PageRoutes';

const routes = [
  {
    path: '',
    name: 'Overview',
    component: () => import('@/view/pages/Overview.vue'),
  },
  ...PageRoutes,
];

export default routes;

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
