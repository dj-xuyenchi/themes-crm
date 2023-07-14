<template>
  <div>
    <sdPageHeader
      title="Vuex"
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
                <h2>Vuex Setup</h2>
                <p class="mb-0">
                  HexaDash provide you a ready setup for Vux store manage. The
                  configuration for <strong>Store</strong> is located at
                  <code>src/vuex</code> folder
                </p>
                <p>
                  The store is created from <code>src/vuex/store.js</code> and
                  all the modules exported from
                  <code>src/vuex/modules/component/actionCreator.js</code>
                </p>
                <h2>
                  To setup a new vuex store module , please follow the below
                  steps:
                </h2>
                <p class="mb-0">
                  1. Create a folder named with your module at
                  <code>src/vuex/modules</code>folder and create component
                  folder then add actionCreate.js,mutations.js, those file to
                  your created folder.
                </p>
                <p class="mb-0">
                  2. Then we create mutations to actionCreate.js file. E.g.
                </p>

                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="actions"
                  :highlight="highlighter"
                ></prism-editor>
                <p class="mb-0">
                  2. Then Define mutations to
                  <code>src/vuex/modules/YOUR_MODULE/mutations.js</code>
                </p>
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="mutations"
                  :highlight="highlighter"
                ></prism-editor>
                <p class="mb-0">
                  3. Add your actions to <code>src/vuex/store.js</code> as well.
                  E.g.
                </p>
                <prism-editor
                  :readonly="true"
                  class="my-editor height-100"
                  v-model="store"
                  :highlight="highlighter"
                ></prism-editor>
              </div>
            </sdCards>
            <sdCards headless>
              <div class="ninjadash-template-documentation">
                <h2>Redux Actions & Reducers</h2>
                <ul>
                  <li>
                    <h3>Theme Layout:</h3>
                    <p>
                      This store modules is made for Theme Layout actions, it
                      handles layout customization. You can find actions,
                      reducer files in
                      <code>src/vuex/modules/themeLayout</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Authentication:</h3>
                    <p>
                      This store modules is made for Authentication actions, it
                      handles authentication functionalities. You can find
                      actions, reducer files in
                      <code>src/vuex/modules/authentication</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Calendar:</h3>
                    <p>
                      This store modules is made for Calendar actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/calendar</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Cart:</h3>
                    <p>
                      This store modules is made for Cart actions. You can find
                      actions, reducer files in
                      <code>src/vuex/modules/cart</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Crud:</h3>
                    <p>
                      This store modules is made for Crud actions. You can find
                      actions, reducer files in
                      <code>src/vuex/modules/crud</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Data Filter:</h3>
                    <p>
                      This store modules is made for Data FIlter actions. You
                      can find actions, reducer files in
                      <code>src/vuex/modules/data-filter</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Email:</h3>
                    <p>
                      This store modules is made for Email actions. You can find
                      actions, reducer files in
                      <code>src/vuex/modules/email</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Firebase:</h3>
                    <p>
                      This store modules is made for Firebase actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/firebase</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Gallery:</h3>
                    <p>
                      This store modules is made for Gallery actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/gallery</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Header Search:</h3>
                    <p>
                      This store modules is made for Header Search actions. You
                      can find actions, reducer files in
                      <code>src/vuex/modules/headerSearch</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Jobs:</h3>
                    <p>
                      This store modules is made for Jobs actions. You can find
                      actions, reducer files in
                      <code>src/vuex/modules/jobs</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Kanban:</h3>
                    <p>
                      This store modules is made for Calendar actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/kanban</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Message:</h3>
                    <p>
                      This store modules is made for Calendar actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/message</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Note:</h3>
                    <p>
                      This store modules is made for Calendar actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/note</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Notification:</h3>
                    <p>
                      This store modules is made for Notification actions. You
                      can find actions, reducer files in
                      <code>src/vuex/modules/notification</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Orders:</h3>
                    <p>
                      This store modules is made for Orders actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/orders</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Product:</h3>
                    <p>
                      This store modules is made for Product actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/product</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Profile:</h3>
                    <p>
                      This store modules is made for Profile actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/profile</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Sellers:</h3>
                    <p>
                      This store modules is made for Calendar actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/sellers</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Task:</h3>
                    <p>
                      This store modules is made for Task actions. You can find
                      actions, reducer files in
                      <code>src/vuex/modules/task</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Team:</h3>
                    <p>
                      This store modules is made for Calendar actions. You can
                      find actions, reducer files in
                      <code>src/vuex/modules/team</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Support Ticket:</h3>
                    <p>
                      This store modules is made for Support Ticket actions. You
                      can find actions, reducer files in
                      <code>src/vuex/modules/supportTickets</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Theme Users:</h3>
                    <p>
                      This store modules is made for Theme Users actions. You
                      can find actions, reducer files in
                      <code>src/vuex/modules/themeUsers</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>To Do:</h3>
                    <p>
                      This store modules is made for To do actions. You can find
                      actions, reducer files in
                      <code>src/vuex/modules/todo</code> folder.
                    </p>
                  </li>
                  <li>
                    <h3>Uses:</h3>
                    <p>
                      This store modules is made for Users actions. You can find
                      actions, reducer files in
                      <code>src/vuex/modules/users</code> folder.
                    </p>
                  </li>
                </ul>
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
    breadcrumbName: "Vuex",
  },
];

export default defineComponent({
  name: "Vuex",
  components: {
    Main,
    PrismEditor,
    DocumentationStyleWrap,
  },
  setup() {
    const mutations = ref(`
export default {
  teamDataBegin(state) {
    state.loading = true;
  },

  teamDataSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  teamDataErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};

`);

    const actions = ref(`
import staticData from '@/demoData/teamData.json';
import mutations from './mutations';

const state = () => ({
  data: staticData,
  loading: false,
  error: null,
});

const actions = {
  async teamGetData({ commit }) {
    try {
      commit('teamDataBegin');
      commit('teamDataSuccess', staticData);
    } catch (err) {
      commit('teamDataErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};

`);

    const store = ref(`
import { createStore } from 'vuex';
import themeLayout from './modules/themeLayout/actionCreator';
import auth from './modules/authentication/actionCreator';

export default createStore({
  modules: {
    themeLayout,
    auth,
  },
});
`);

    return {
      mutations,
      PageRoutes,
      actions,
      store,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
