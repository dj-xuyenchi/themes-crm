<script setup lang="tsx">
import { TopToolBox } from './Style';
import { Main, TableWrapper } from '../../styled';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import sellers from '@/demoData/sellers.json';

const columns = [
  {
    title: 'Sellers',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Store',
    dataIndex: 'store',
    key: 'store',
  },
  {
    title: 'Products',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Wallet Balance',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Create Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

const { state } = useStore();
const searchData = computed(() => state.headerSearchData.data);
const item = ref(sellers);
const selectedRowKeys = ref([]);

const dataSource = computed(() =>
  item.value.map((value: any) => {
    const { storeName, id, name, product, amount, date, img } = value;
    return {
      key: id,
      name: (
        <div class="seller-info">
          <>
            <img src={`${img}`} alt="" />
            {name}
          </>
        </div>
      ),
      store: storeName,
      product: <span class="product-id">{product}</span>,
      amount,
      date,
      action: (
        <div class="table-actions">
          <>
            <sdButton class="btn-icon" type="info" to="#" shape="circle">
              <unicon name="edit" width="16"></unicon>
            </sdButton>
            <sdButton class="btn-icon" type="danger" to="#" shape="circle">
              <unicon name="trash-alt" width="16"></unicon>
            </sdButton>
          </>
        </div>
      ),
    };
  }),
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
  <sdPageHeader title="Sellers" class="ninjadash-page-header-main"> </sdPageHeader>
  <Main>
    <sdCards headless>
      <a-row :gutter="15">
        <a-col :md="24">
          <TopToolBox>
            <a-row :gutter="15">
              <a-col :xxl="5" :lg="10" :xs="24">
                <div class="table-search-box">
                  <sdAutoComplete :dataSource="searchData" width="100%" patterns />
                </div>
              </a-col>
              <a-col :xxl="15" :lg="5" :xs="24" />
              <a-col :xxl="4" :lg="9" :xs="24">
                <div class="table-toolbox-actions">
                  <sdButton size="sm" type="secondary" transparented> Export </sdButton>
                  <sdButton size="sm" type="primary"> + Add Order </sdButton>
                </div>
              </a-col>
            </a-row>
          </TopToolBox>
        </a-col>
        <a-col :md="24">
          <TableWrapper class="table-seller table-responsive">
            <a-table
              :rowSelection="rowSelection"
              :dataSource="dataSource"
              :columns="columns"
              :pagination="{
                pageSize: 7,
                showSizeChanger: true,
                total: sellers ? sellers.length : 20,
              }"
            />
          </TableWrapper>
        </a-col>
      </a-row>
    </sdCards>
  </Main>
</template>
