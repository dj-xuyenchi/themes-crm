<template>
  <div>
    <sdPageHeader
      title="Auth0 Integration"
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
                <h2>Auth0 Configuration</h2>
                <p class="mb-0">
                  To configure Auth0, find the .env file and change the
                  configuration shown in the image below
                </p>

                <prism-editor
                  :readonly="false"
                  class="my-editor height-100 mb-35"
                  v-model="auth0Env"
                  :highlight="highlighter"
                ></prism-editor>

                <p>
                  For more information go to
                  <a href="https://auth0.com/" target="_blank"
                    >https://auth0.com/</a
                  >
                </p>
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
import { DocumentationStyleWrap } from "./style";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const PageRoutes = [
  {
    path: "index",
    breadcrumbName: "Docs",
  },
  {
    path: "",
    breadcrumbName: "Firebase Integration",
  },
];

export default defineComponent({
  name: "Firebase",
  components: {
    Main,
    DocumentationStyleWrap,
    PrismEditor,
  },
  setup() {
    const auth0Env = ref(`  
VUE_APP_AUTH0_DOMAIN='auth domain'
VUE_APP_AUTH0_CLIENT_ID='client id'
    `);

    return {
      PageRoutes,
      auth0Env,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
