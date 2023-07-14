<template>
  <div>
    <sdPageHeader
      title="Axios Integration"
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
                <h2>Axios CRUD Integration</h2>
                <p>
                  HexaDash provides you a ready-maid setup for Axios CRUD integration
                  using REST API
                </p>
                <h2>Update API Base URL</h2>
                <p class="mb-0">
                  From <code>.env</code> file you can update the base URL
                </p>

                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="baseUrl"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards headless>
              <div class="ninjadash-template-documentation">
                <h2>Axios Setup</h2>
                <p>
                  Then we create Axios Instance. we can find the instancees for
                  <strong>GET,</strong> <strong>POST,</strong>
                  <strong>PATCH,</strong> <strong>PUT</strong> at
                  <code>src/config/dataService/dataService.ts</code>.
                </p>
                <h2>Redux Setup</h2>
                <p class="mb-0">
                  After the above setup we will do our Vuex setup.
                </p>
                <p class="mb-0">
                  At first create action in
                  <code>/src/vuex/modules/crud/axios/actionCreator.ts</code> file.
                </p>
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="vuexData"
                  :highlight="highlighter"
                ></prism-editor>
                <p class="mb-0">
                  After configuring Vuex you need to call the action in your
                  component
                </p>
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="component"
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
    breadcrumbName: "Axios Integration",
  },
];

export default defineComponent({
  name: "Axios",
  components: {
    Main,
    PrismEditor,
    DocumentationStyleWrap,
  },
  setup() {
    const baseUrl = ref(`
VITE_BASE_URL = "YOUR_API_BASE_URL"
`);

    const vuexData = ref(`
import mutations from './mutations';
import { DataService } from '@/config/dataService/dataService';

const state = () => ({
  data: [],
  loading: false,
  error: null,
});

const actions = {

  async axiosCrudGetData({ commit }) {
    try {
      await commit('axiosReadBegin');
      const query = await DataService.get('/all');
      await commit('axiosReadSuccess', query.data.data);
    } catch (err) {
      console.log(err);
      await commit('axiosReadErr', err);
    }
  },
};

`);

    const component = ref(`
import { useStore } from "vuex";
import { computed, onMounted, ref, reactive, defineComponent } from "vue";

const ViewPage = defineComponent({
  name: "ViewPage",
  setup() {
    const { state, dispatch } = useStore();
    const data = computed(() => state.crud.data);
    const isLoading = computed(() => state.crud.loading);
    onMounted(() => {
      dispatch("axiosCrudGetData");
    });

    return {
      data,
      isLoading,
    };
  },
});
export default ViewPage;
`);

    return {
      baseUrl,
      PageRoutes,
      vuexData,
      component,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
