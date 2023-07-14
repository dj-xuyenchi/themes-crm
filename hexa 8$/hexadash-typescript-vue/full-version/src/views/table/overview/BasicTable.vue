<script setup lang="ts">
const data = [
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
  {
    key: '3',
    name: 'Rocky',
    age: 12,
    address: '10 Downing Street',
  },
  {
    key: '4',
    name: 'Himu',
    age: 44,
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
</script>

<template>
  <div>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template v-slot:name:text>
        <!-- <a>{{ text }}</a> -->
      </template>
    </a-table>
  </div>
</template>
