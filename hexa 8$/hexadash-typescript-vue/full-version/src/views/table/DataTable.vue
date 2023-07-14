<script setup lang="tsx">
import { computed, onMounted } from 'vue';
import { Main } from '../styled';
import ProjectLists from '@/views/apps/project/overview/List.vue';
import TaskList from '@/views/apps/project/overview/TaskList.vue';
import { TaskLists } from '@/views/apps/project/style';
import DataTables from '@/components/table/DataTable.vue';
import { BorderLessHeading } from '../styled';
import { useStore } from 'vuex';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value: any, record: any) => record.name.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    filterMultiple: false,
    onFilter: (value: any, record: any) => record.address.indexOf(value) === 0,
    sorter: (a: any, b: any) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend'],
  },
];
const columnsPagination = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jim Red 2',
    age: 37,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '6',
    name: 'Jim Red 2',
    age: 35,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '7',
    name: 'Jim Red 2',
    age: 37,
    address: 'London No. 2 Lake Park',
  },
];
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
];

const { state, dispatch } = useStore();

onMounted(() => dispatch('tableReadData'));

const tableDataScource = computed(() =>
  state.dataTable.tableData.map((item: any) => {
    const { id, name, country, company, position, status, date } = item;
    return {
      id: `#${id}`,
      key: item.id,
      user: <span class="ninjadash-username">{name}</span>,
      country: <span>{country}</span>,
      company: <span>{company}</span>,
      position,
      date,
      status: <span class={`ninjadash-status ninjadash-status-${status}`}>{status}</span>,
      action: (
        <div class="table-actions">
          <router-link class="view" to={`#`}>
            <unicon name="eye"></unicon>
          </router-link>
          <router-link class="edit" to="#">
            <unicon name="edit"></unicon>
          </router-link>
          <router-link class="delete" to="#">
            <unicon name="trash"></unicon>
          </router-link>
        </div>
      ),
    };
  }),
);
</script>

<template>
  <div>
    <sdPageHeader title="Data Tables" class="ninjadash-page-header-main" />
    <Main>
      <a-row :gutter="15">
        <a-col :xs="24">
          <BorderLessHeading>
            <sdCards title="Data Table">
              <DataTables
                :filterOption="true"
                :filterOnchange="true"
                :tableData="tableDataScource"
                :columns="dataTableColumn"
                :rowSelection="false"
              />
            </sdCards>
          </BorderLessHeading>
        </a-col>
        <a-col :xs="24">
          <BorderLessHeading>
            <sdCards title="Data Table 2">
              <DataTables
                :filterOption="true"
                :filterOnchange="true"
                :tableData="tableDataScource"
                :columns="dataTableColumn"
                :rowSelection="true"
              />
            </sdCards>
          </BorderLessHeading>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Project List"> <ProjectLists /></sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Filter and sorter">
            <a-table class="table-responsive" :pagination="false" :columns="columns" :data-source="data" />
          </sdCards>
        </a-col>
        <a-col :xs="24">
          <sdCards title="Table Pagination">
            <a-table
              class="table-responsive"
              :columns="columnsPagination"
              :data-source="data"
              :pagination="{ pageSize: 3 }"
            />
          </sdCards>
        </a-col>
        <a-col :xs="12"> </a-col>
        <a-col :xs="24">
          <sdCards title="Task List">
            <TaskLists>
              <TaskList />
            </TaskLists>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>
