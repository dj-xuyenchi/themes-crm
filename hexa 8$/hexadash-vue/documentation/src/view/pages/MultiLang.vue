<template>
  <div>
    <sdPageHeader
      title="Multi Language"
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
                  HexaDash Respect every mother language so that we provide you
                  multi-language support through HexaDash admin.
                  <strong>i18n</strong> language translation library used for
                  translation.
                </p>
                <p class="mb-0"><strong>How to add new language?</strong></p>
                <p class="mb-0">Lets add Bengali language:</p>
                <p class="mb-0">
                  1) Create a folder at <code>src/i18n/localization</code> named
                  <code>/bn</code>. Then create a file under this folder named
                  <code>/translation.js</code>
                </p>
                <p class="mb-0">
                  2) Update the below code in the
                  <code>src/i18n/config.js</code>
                </p>

                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="config"
                  :highlight="highlighter"
                ></prism-editor>

                <p>
                  3) Then Update the dropdown from
                  <code>src/components/utilities/auth-info/info.js</code>
                </p>
                <div class="docs-highlighter">
                  <p class="mb-5">
                    Refer below mentioned code to add language to dropdown:
                  </p>
                </div>
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="country"
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
    breadcrumbName: "Multi language",
  },
];

export default defineComponent({
  name: "MultiLang",
  components: {
    Main,
    PrismEditor,
    DocumentationStyleWrap,
  },
  setup() {
    const config = ref(`
resources: {
    bn: {
        translations: require('./localization/bn/translation.json')
    }
},

i18n.languages = ['bn'];

`);

    const country = ref(`
<NavAuth>
  <router-link @click="() => onFlagChangeHandle('english')" to="#">
    <img
      :src="require('../../../static/img/flag/english.png')"
      alt=""
    />
    <span>English</span>
  </router-link>
  <router-link @click="() => onFlagChangeHandle('germany')" to="#">
    <img
      :src="require('../../../static/img/flag/germany.png')"
      alt=""
    />
    <span>Germany</span>
  </router-link>
  <router-link @click="() => onFlagChangeHandle('spain')" to="#">
    <img
      :src="require('../../../static/img/flag/spain.png')"
      alt=""
    />
    <span>Spain</span>
  </router-link>
  <router-link @click="() => onFlagChangeHandle('bengali')" to="#">
    <img
      :src="require('../../../static/img/flag/bengali.png')"
      alt=""
    />
    <span>Bengali</span>
  </router-link>
</NavAuth>

`);

    return {
      config,
      PageRoutes,
      country,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
