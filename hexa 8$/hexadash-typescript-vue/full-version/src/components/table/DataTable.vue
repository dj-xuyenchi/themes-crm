<script setup lang="ts">
import { computed, ref, unref } from 'vue';
import { DataTableStyleWrap } from './Style';
import { TableWrapper } from '../../views/styled';
import { useStore } from 'vuex';

const props = defineProps({
  filterOption: Boolean,
  filterOnchange: Boolean,
  rowSelection: Boolean,
  tableData: Array,
  columns: Array,
});

const { dispatch } = useStore();

const handleIdSearch = (e: any) => {
  const id = e.currentTarget.value;
  dispatch('dataLiveFilter', { value: id, key: 'id' });
};
const handleStatusSearch = (value: any) => {
  dispatch('dataLiveFilter', { value, key: 'status' });
};

const handleDataUser = (e: any) => {
  const { value } = e.currentTarget;
  dispatch('dataLiveFilter', { value, key: 'name' });
};

const handleSearch = () => {
  const idInput = document.querySelector('.ninjadash-data-id') as HTMLInputElement;
  const statusSelect = document.querySelector('.ninjadash-data-status .ant-select-selection-item') as HTMLDivElement;
  if (idInput && statusSelect) {
    const id = idInput.value;
    const status = statusSelect.title;
    dispatch('filterWithSubmit', { id, status });
  }
};

const selectedRowKeys = ref([]); // Check here to configure the default column

const onSelectChange = (changableRowKeys: any) => {
  console.log('selectedRowKeys changed: ', changableRowKeys);
  selectedRowKeys.value = changableRowKeys;
};

const rowSelections = computed(() => {
  return {
    selectedRowKeys: unref(selectedRowKeys),
    onChange: onSelectChange,
    hideDefaultSelections: true,
  };
});
</script>

<template>
  <DataTableStyleWrap>
    <div v-if="filterOption" class="ninjadash-datatable-filter">
      <div v-if="!filterOnchange" class="ninjadash-datatable-filter__left">
        <div class="ninjadash-datatable-filter__input">
          <span class="label">Id:</span>
          <a-input class="ninjadash-data-id" placeholder="Search with Id" />
        </div>
        <div class="ninjadash-datatable-filter__input">
          <span class="label">Status:</span>
          <a-select :style="{ width: 200 }" class="ninjadash-data-status" defaultValue="active">
            <a-select-option value="active">Active</a-select-option>
            <a-select-option value="deactiveted">Deactivated</a-select-option>
            <a-select-option value="blocked">Blocked</a-select-option>
          </a-select>
        </div>
        <div class="ninjadash-datatable-filter__action">
          <sdButton type="primary" size="sm" @click="handleSearch" transparented>Submit</sdButton>
        </div>
      </div>

      <div v-else class="ninjadash-datatable-filter__left">
        <div class="ninjadash-datatable-filter__input">
          <span class="label">Id:</span>
          <a-input @change="handleIdSearch" placeholder="Search with Id" />
        </div>
        <div class="ninjadash-datatable-filter__input">
          <span class="label">Status:</span>
          <a-select @change="handleStatusSearch" :style="{ width: 200 }" defaultValue="active">
            <a-select-option value="active">Active</a-select-option>
            <a-select-option value="deactiveted">Deactivated</a-select-option>
            <a-select-option value="blocked">Blocked</a-select-option>
          </a-select>
        </div>
      </div>

      <div class="ninjadash-datatable-filter__right">
        <a-input @change="handleDataUser" size="default" placeholder="Search">
          <template #prefix>
            <unicon name="search"></unicon>
          </template>
        </a-input>
      </div>
    </div>

    <div class="ninjadasj-datatable">
      <TableWrapper class="table-data-view table-responsive">
        <a-table
          v-if="rowSelection"
          :row-selection="rowSelections"
          :pagination="{ pageSize: 10, showSizeChanger: true }"
          :data-source="tableData"
          :columns="columns"
        />

        <a-table
          v-else
          :pagination="{ pageSize: 10, showSizeChanger: true }"
          :data-source="tableData"
          :columns="columns"
        />
      </TableWrapper>
    </div>
  </DataTableStyleWrap>
</template>
