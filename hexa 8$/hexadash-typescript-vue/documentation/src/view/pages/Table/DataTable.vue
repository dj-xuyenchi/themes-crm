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
            <sdCards title="Data Table">
              <DataTable
                :filterOption="true"
                :filterOnchange="true"
                :tableData="tableData"
                :columns="dataTableColumn"
                :rowSelection="true"
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
import { computed, defineComponent, onMounted, ref } from "vue";
import { DocumentationStyleWrap } from "../style";
import { useStore } from "vuex";
import DataTable from "@/components/table/DataTable";

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const dataTableColumn = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "coutry",
  },
  {
    title: "Company",
    dataIndex: "company",
    key: "company",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Join Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
    width: "90px",
  },
];

const PageRoutes = [
  {
    path: "index",
    breadcrumbName: "Docs",
  },
  {
    path: "",
    breadcrumbName: "Data Table",
  },
];

export default defineComponent({
  name: "Basic Table",
  components: {
    Main,
    DocumentationStyleWrap,
    PrismEditor,
    DataTable,
  },
  setup() {
    const { state, dispatch } = useStore();

    const tableData = computed(() =>
      state.dataTable.tableData.map((item) => {
        const { id, name, country, company, position, status, date } = item;
        return {
          key: id,
          id: `#${id}`,
          user: <span class="ninjadash-username">{name}</span>,
          country: <span>{country}</span>,
          company: <span>{company}</span>,
          position,
          date,
          status: (
            <span class={`ninjadash-status ninjadash-status-${status}`}>
              {status}
            </span>
          ),
          action: (
            <div class="table-actions">
              <router-link class="view" to={`#`}>
                <unicon name="eye" />
              </router-link>
              <router-link class="edit" to="#">
                <unicon name="edit" />
              </router-link>
              <router-link class="delete" to="#">
                <unicon name="trash" />
              </router-link>
            </div>
          ),
        };
      })
    );

    onMounted(() => dispatch("tableReadData"));

    const auth0Env = ref(`    
<template>
  <Main>
    <DataTable
      :filterOption="true"
      :filterOnchange="true"
      :tableData="tableData"
      :columns="dataTableColumn"
      :rowSelection="true"
    />
  </Main>
</template>

<script>
  import { defineComponent, ref } from "vue";
  import { Main } from '../styled';
  import DataTable from "@/components/table/DataTable";


  const tableDataScource = [];

  const dataTableColumn = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'coutry',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Join Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      width: '90px',
    },
  ]

  export default defineComponent({    
    components: {
      Main,
      DataTable
    },
    setup() {
      return {
        tableDataScource,
        dataTableColumn
      }
    }
  });
< /script>
`);

    return {
      PageRoutes,
      auth0Env,
      dataTableColumn,
      tableData,
    };
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
});
</script>
