<template>
  <BorderLessHeading>
    <sdCards title="Task List">
      <template #button>
        <div class="ninjadash-card-nav">
          <ul>
            <li
              :class="taskTab === 'all' ? 'ninjadash-active' : 'ninjadash-all'"
            >
              <router-link @click="(e) => handleTabActivation('all', e)" to="#">
                All
              </router-link>
            </li>
            <li
              :class="
                taskTab === 'favourite'
                  ? 'ninjadash-active'
                  : 'ninjadash-favourite'
              "
            >
              <router-link
                @click="(e) => handleTabActivation('favourite', e)"
                to="#"
              >
                Favourite
              </router-link>
            </li>
            <li
              :class="
                taskTab === 'completed'
                  ? 'ninjadash-active'
                  : 'ninjadash-completed'
              "
            >
              <router-link
                @click="(e) => handleTabActivation('completed', e)"
                to="#"
              >
                Completed
              </router-link>
            </li>
          </ul>
        </div>
      </template>
      <TaskList
        header=""
        :description="false"
        :taskStatus="taskTab"
        :taskLimit="5"
      />
    </sdCards>
  </BorderLessHeading>
</template>
<script>
import { defineComponent, ref } from "vue";
import TaskList from "@/components/tasklist/TaskList";
import { BorderLessHeading } from "../../../styled";
export default defineComponent({
  components: {
    TaskList,
    BorderLessHeading,
  },
  setup() {
    const taskTab = ref("all");
    const handleTabActivation = (value, event) => {
      event.preventDefault();
      taskTab.value = value;
    };

    return {
      handleTabActivation,
      taskTab,
    };
  },
});
</script>
