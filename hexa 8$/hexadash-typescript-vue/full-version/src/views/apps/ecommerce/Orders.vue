<script setup lang="tsx">
import { TopToolBox } from './Style';
import { Main, TableWrapper } from '../../styled';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const columns = [
  {
    title: 'Order Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'customer',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
  },
];

const { state, dispatch } = useStore();
const searchData = computed(() => state.headerSearchData.data);
const orders = computed(() => state.orders.data);

const item = computed(() => state.orders.data);
const selectedRowKeys = ref([]);
const stateValue = ref('');
const filterKey = ref(['Shipped', 'Awaiting Shipment', 'Canceled']);
const sortDefault = ref('all');

const handleChangeForFilter = (e: any) => {
  stateValue.value = e.target.value;
  dispatch('orderFilter', { column: 'status', value: e.target.value });
};

const dataSource = computed(() =>
  orders.value.map((value: any, key: any) => {
    const { status, orderId, customers, amount, date } = value;
    return {
      key: key + 1,
      id: <span class="order-id">{orderId}</span>,
      customer: <span class="customer-name">{customers}</span>,
      status: (
        <span
          class={`status ${status === 'Shipped' ? 'Success' : status === 'Awaiting Shipment' ? 'warning' : 'error'}`}
        >
          {status}
        </span>
      ),
      amount: <span class="ordered-amount">{amount}</span>,
      date: <span class="ordered-date">{date}</span>,
      action: (
        <div class="table-actions orders-actions">
          <>
            <sdButton class="btn-icon" type="primary" shape="circle">
              <unicon name="eye" width="16"></unicon>
            </sdButton>
            <sdButton class="btn-icon" type="info" shape="circle">
              <unicon name="edit" width="16"></unicon>
            </sdButton>
            <sdButton class="btn-icon" type="danger" shape="circle">
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
  onChange: (selectedRowKeys: any) => {
    onSelectChange(selectedRowKeys);
  },
};
</script>

<template>
  <sdPageHeader title="Orders" class="ninjadash-page-header-main"> </sdPageHeader>
  <Main>
    <sdCards headless>
      <a-row :gutter="15">
        <a-col :xs="24">
          <TopToolBox>
            <a-row :gutter="15" class="justify-content-center">
              <a-col :xxl="6" :lg="6" :xs="24">
                <div class="table-search-box">
                  <sdAutoComplete :dataSource="searchData" width="100%" patterns />
                </div>
              </a-col>
              <a-col :xxl="14" :lg="16" :xs="24">
                <div class="table-toolbox-menu">
                  <span class="toolbox-menu-title"> Status:</span>
                  <a-radio-group v-if="item" @change="handleChangeForFilter" v-model:value="sortDefault">
                    <a-radio-button :class="stateValue === '' && 'active'" value="all">All</a-radio-button>

                    <a-radio-button
                      v-for="value in [...new Set(filterKey)]"
                      :key="value"
                      :value="value"
                      :class="stateValue === value && 'active'"
                    >
                      {{ value }}
                    </a-radio-button>
                  </a-radio-group>
                </div>
              </a-col>
              <a-col :xxl="4" :lg="4" :xs="24">
                <div class="table-toolbox-actions">
                  <sdButton size="sm" type="secondary" transparented> Export </sdButton>
                  <sdButton size="sm" type="primary"> <unicon name="plus" width="14"></unicon> Add Order </sdButton>
                </div>
              </a-col>
            </a-row>
          </TopToolBox>
        </a-col>
      </a-row>
      <a-row :gutter="15">
        <a-col :md="24">
          <TableWrapper class="table-order table-responsive">
            <a-table
              :rowSelection="rowSelection"
              :dataSource="dataSource"
              :columns="columns"
              :pagination="{
                pageSize: 7,
                showSizeChanger: true,
                total: orders ? orders.length : 20,
              }"
            />
          </TableWrapper>
        </a-col>
      </a-row>
    </sdCards>
  </Main>
</template>
