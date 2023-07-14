<script setup lang="tsx">
import { RecordViewWrapper } from './style';
import { Main, TableWrapper } from '../../styled';
import { useStore } from 'vuex';
import { computed, onMounted, ref, reactive } from 'vue';
import dayjs from 'dayjs';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
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
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Joining Date',
    dataIndex: 'jdate',
    key: 'jdate',
  },
  {
    title: 'Actions',
    dataIndex: 'action',
    key: 'action',
    width: '90px',
  },
];

const { state, dispatch } = useStore();
const crud = computed(() => state.crud.data);
const isLoading = computed(() => state.crud.loading);
const selectedRowKeys = ref([]);

onMounted(() => {
  dispatch('axiosCrudGetData');
});

const handleDelete = (id: any) => {
  const confirm = window.confirm('Are you sure delete this?');
  if (confirm) {
    dispatch('axiosDataDelete', {
      id,
      getData: () => {
        dispatch('axiosCrudGetData');
      },
    });
  }
  return false;
};

const formState = reactive({
  searchItem: '',
});

const onHandleSearch = () => {
  dispatch('axiosDataSearch', formState.searchItem);
};

const dataSource = computed(() =>
  crud.value.length
    ? crud.value.map((person: any, key: any) => {
        const { id, name, email, company, position, join, status, city, country, image } = person;

        return {
          key: key + 1,
          name: (
            <div class="record-img align-center-v">
              <img
                src={image ? 'http://api.masudr.com/' + image : '/src/assets/img/avatar/profileImage.png'}
                alt={id}
              />
              <span>
                <span>{name}</span>
                <span class="record-location">
                  {city},{country}
                </span>
              </span>
            </div>
          ),
          email,
          company,
          position,
          jdate: dayjs(join).format('YYYY-MM-DD'),
          status: <span class={`status ${status}`}>{status}</span>,
          action: (
            <div class="table-actions">
              <router-link class="edit" to={`/crud/axios-edit/${id}`}>
                <unicon name="edit" />
              </router-link>
              &nbsp;&nbsp;&nbsp;
              <router-link class="delete" onClick={() => handleDelete(id)} to="#">
                <unicon name="trash" />
              </router-link>
            </div>
          ),
        };
      })
    : [],
);

const onSelectChange = (selectedRowKey: any) => {
  selectedRowKeys.value = selectedRowKey;
};

const rowSelection = {
  selectedRowKeys,
  onChange: onSelectChange,
};
</script>

<template>
  <RecordViewWrapper>
    <sdPageHeader class="ninjadash-page-header-main" :routes="[]" title="Data List">
      <template #subTitle>
        <sdButton class="btn-add_new" size="default" type="primary">
          <router-link to="/crud/axios-add"> <unicon name="plus" size="14"></unicon> Add New </router-link>
        </sdButton>
      </template>
      <template #buttons>
        <div class="search-box">
          <span class="search-icon">
            <unicon name="search" size="14"></unicon>
          </span>
          <a-input
            @change="onHandleSearch"
            v-model:value.trim="formState.searchItem"
            type="text"
            name="recored-search"
            placeholder="Search Here"
          /></div
      ></template>
    </sdPageHeader>
    <Main>
      <a-row :gutter="15">
        <a-col class="w-100" :md="24">
          <sdCards headless>
            <div v-if="isLoading" class="spin">
              <a-spin />
            </div>

            <div v-else>
              <TableWrapper class="table-data-view table-responsive">
                <a-table
                  :rowSelection="rowSelection"
                  :pagination="{ pageSize: 10, showSizeChanger: true }"
                  :dataSource="dataSource"
                  :columns="columns"
                />
              </TableWrapper>
            </div>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </RecordViewWrapper>
</template>
