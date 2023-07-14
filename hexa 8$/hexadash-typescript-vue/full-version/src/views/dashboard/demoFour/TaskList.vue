<script setup lang="ts">
import { ref } from 'vue';
import TaskList from '../../../components/tasklist/TaskList.vue';
import { BorderLessHeading } from '../../styled';
const taskTab = ref('all');
const handleTabActivation = (value: any, event: any) => {
  event.preventDefault();
  taskTab.value = value;
};
</script>

<template>
  <BorderLessHeading>
    <sdCards title="Task List">
      <template #button>
        <div class="ninjadash-card-nav">
          <ul>
            <li :class="taskTab === 'all' ? 'ninjadash-active' : 'ninjadash-all'">
              <router-link @click="(e: any) => handleTabActivation('all', e)" to="#"> All </router-link>
            </li>
            <li :class="taskTab === 'favourite' ? 'ninjadash-active' : 'ninjadash-favourite'">
              <router-link @click="(e: any) => handleTabActivation('favourite', e)" to="#"> Favourite </router-link>
            </li>
            <li :class="taskTab === 'completed' ? 'ninjadash-active' : 'ninjadash-completed'">
              <router-link @click="(e: any) => handleTabActivation('completed', e)" to="#"> Completed </router-link>
            </li>
          </ul>
        </div>
      </template>
      <TaskList header="" :description="false" :taskStatus="taskTab" :taskLimit="5" />
    </sdCards>
  </BorderLessHeading>
</template>
