<template>
  <div>
    <sdPageHeader
      title="Table"
      class="ninjadash-page-header-main"
      :routes="PageRoutes"
    >
    </sdPageHeader>
    <Main>
      <DocumentationStyleWrap>
        <a-row :gutter="25">
          <a-col :sm="24" :xs="24">
            <sdCards title="Basic Table">
              <a-table
                class="table-responsive mb-35"
                :pagination="false"
                :data-source="dataSource"
                :columns="columns"
              />
              <br />
              <prism-editor
                :readonly="false"
                class="my-editor height-100 mb-35"
                v-model="auth0Env"
                :highlight="highlighter"
              ></prism-editor>
            </sdCards>
          </a-col>
        </a-row>
      </DocumentationStyleWrap>
    </Main>
  </div>
</template>

<script>
import { Main } from "../../styled";
import { defineComponent, ref } from "vue";
import { DocumentationStyleWrap } from "../style";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const PageRoutes = [
  {
    path: "index",
    breadcrumbName: "Docs",
  },
  {
    path: "",
    breadcrumbName: "Basic Table",
  },
];

export default defineComponent({
  name: "Basic Table",
  components: {
    Main,
    DocumentationStyleWrap,
    PrismEditor,
  },
  setup() {
    const auth0Env = ref(`    
<template>
  <Main>
    <a-table class="table-responsive" :pagination="false" :data-source="dataSource" :columns="columns" />
  </Main>
</template>

<script>
  import { defineComponent, ref } from "vue";
  import { Main } from '../styled';

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  export default defineComponent({    
    components: {
      Main   
    },
    setup() {
      return {
        dataSource,
        columns
      }
    }
  });
< /script>
`);

    return {
      PageRoutes,
      auth0Env,
      dataSource,
      columns,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
