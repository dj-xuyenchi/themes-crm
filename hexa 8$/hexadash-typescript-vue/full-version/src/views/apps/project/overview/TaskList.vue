<script setup lang="tsx">
import { TasklistAction } from '../style';
import { ref } from 'vue';

const selectedRowKeys = ref([]);
const selectedRows = ref([]);
const dataSource = [
  {
    key: '1',
    title: <span class="task-title">Add Images To the gallery</span>,
    component: (
      <TasklistAction>
        <span class="task-created">09:20 AM </span>
        <img class="task-author" style={{ width: '30px' }} src={'/src/assets/img/users/1.png'} alt="" />
        <span class="task-move">
          <unicon name="expand-arrows" width="16"></unicon>
        </span>
        <div class="task-action">
          <sdDropdown
            overlay={
              <>
                <a to="#">
                  <unicon name="eye" width="14"></unicon>
                  View
                </a>
                <a to="#">
                  <unicon name="edit" width="14"></unicon>
                  Edit
                </a>
                <a to="#">
                  <unicon name="trash-alt" width="14"></unicon>
                  Delete
                </a>
              </>
            }
          >
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </TasklistAction>
    ),
  },
  {
    key: '2',
    title: <span class="task-title">Add Images To the gallery</span>,
    component: (
      <TasklistAction>
        <span class="task-created">09:20 AM </span>
        <img class="task-author" style={{ width: '30px' }} src={'/src/assets/img/users/1.png'} alt="" />
        <span class="task-move">
          <unicon name="expand-arrows" width="16"></unicon>
        </span>
        <div class="task-action">
          <sdDropdown
            overlay={
              <>
                <a to="#">
                  <unicon name="eye" width="14"></unicon>
                  View
                </a>
                <a to="#">
                  <unicon name="edit" width="14"></unicon>
                  Edit
                </a>
                <a to="#">
                  <unicon name="trash-alt" width="14"></unicon>
                  Delete
                </a>
              </>
            }
          >
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </TasklistAction>
    ),
  },
  {
    key: '3',
    title: <span class="task-title">Add Images To the gallery</span>,
    component: (
      <TasklistAction>
        <span class="task-created">09:20 AM </span>
        <img class="task-author" style={{ width: '30px' }} src={'/src/assets/img/users/1.png'} alt="" />
        <span class="task-move">
          <unicon name="expand-arrows" width="16"></unicon>
        </span>
        <div class="task-action">
          <sdDropdown
            overlay={
              <>
                <a to="#">
                  <unicon name="eye" width="14"></unicon>
                  View
                </a>
                <a to="#">
                  <unicon name="edit" width="14"></unicon>
                  Edit
                </a>
                <a to="#">
                  <unicon name="trash-alt" width="14"></unicon>
                  Delete
                </a>
              </>
            }
          >
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </TasklistAction>
    ),
  },
  {
    key: '4',
    title: <span class="task-title">Add Images To the gallery</span>,
    component: (
      <TasklistAction>
        <span class="task-created">09:20 AM </span>
        <img class="task-author" style={{ width: '30px' }} src={'/src/assets/img/users/1.png'} alt="" />
        <span class="task-move">
          <unicon name="expand-arrows" width="16"></unicon>
        </span>
        <div class="task-action">
          <sdDropdown
            overlay={
              <>
                <a to="#">
                  <unicon name="eye" width="14"></unicon>
                  View
                </a>
                <a to="#">
                  <unicon name="edit" width="14"></unicon>
                  Edit
                </a>
                <a to="#">
                  <unicon name="trash-alt" width="14"></unicon>
                  Delete
                </a>
              </>
            }
          >
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </TasklistAction>
    ),
  },
  {
    key: '5',
    title: <span class="task-title">Add Images To the gallery</span>,
    component: (
      <TasklistAction>
        <span class="task-created">09:20 AM </span>
        <img class="task-author" style={{ width: '30px' }} src={'/src/assets/img/users/1.png'} alt="" />
        <span class="task-move">
          <unicon name="expand-arrows" width="16"></unicon>
        </span>
        <div class="task-action">
          <sdDropdown
            overlay={
              <>
                <a to="#">
                  <unicon name="eye" width="14"></unicon>
                  View
                </a>
                <a to="#">
                  <unicon name="edit" width="14"></unicon>
                  Edit
                </a>
                <a to="#">
                  <unicon name="trash-alt" width="14"></unicon>
                  Delete
                </a>
              </>
            }
          >
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </TasklistAction>
    ),
  },
  {
    key: '6',
    title: <span class="task-title">Add Images To the gallery</span>,
    component: (
      <TasklistAction>
        <span class="task-created">09:20 AM </span>
        <img class="task-author" style={{ width: '30px' }} src={'/src/assets/img/users/1.png'} alt="" />
        <span class="task-move">
          <unicon name="expand-arrows" width="16"></unicon>
        </span>
        <div class="task-action">
          <sdDropdown
            overlay={
              <>
                <a to="#">
                  <unicon name="eye" width="14"></unicon>
                  View
                </a>
                <a to="#">
                  <unicon name="edit" width="14"></unicon>
                  Edit
                </a>
                <a to="#">
                  <unicon name="trash-alt" width="14"></unicon>
                  Delete
                </a>
              </>
            }
          >
            <a to="#">
              <unicon name="ellipsis-h" width="16"></unicon>
            </a>
          </sdDropdown>
        </div>
      </TasklistAction>
    ),
  },
];
const columns = [
  {
    dataIndex: 'title',
    key: 'title',
  },
  {
    dataIndex: 'component',
    key: 'component',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    selectedRowKeys.value = selectedRows;
  },
  getCheckboxProps: (record: any) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};
</script>

<template>
  <div class="task-list-inner table-responsive">
    <a-table :pagination="false" :rowSelection="rowSelection" :dataSource="dataSource" :columns="columns" />
    <div class="tasklist-action">
      <sdButton type="primary" size="lg" transparented>
        <unicon name="plus" width="14"></unicon> Add New Task
      </sdButton>
    </div>
  </div>
</template>
