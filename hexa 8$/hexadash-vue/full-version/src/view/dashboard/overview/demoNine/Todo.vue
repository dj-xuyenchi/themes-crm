<template>
  <ToDos :todoData="todoState" :status="taskTab" title="Todo List">
    <template #tab>
      <div class="ninjadash-card-nav">
        <ul>
          <li :class="taskTab === 'new' ? 'ninjadash-active' : 'ninjadash-all'">
            <router-link @click="(e) => handleTabActivation('new', e)" to="#">
              New
            </router-link>
          </li>
          <li
            :class="
              taskTab === 'deleted' ? 'ninjadash-active' : 'ninjadash-favourite'
            "
          >
            <router-link
              @click="(e) => handleTabActivation('deleted', e)"
              to="#"
            >
              Deleted
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
  </ToDos>
</template>
<script>
import { defineComponent, ref, computed } from "vue";
import ToDos from "@/components/todo/Todo";
import { useStore } from "vuex";

export default defineComponent({
  components: { ToDos },
  setup() {
    const { state } = useStore();
    const taskTab = ref("new");
    const todoData = computed(() => state.todo.data);
    const todoData2 = computed(() => state.todo.data);
    const todoState = computed(() =>
      state.todo.data.filter(
        (todo) =>
          (taskTab.value === "new" && !todo.trash) ||
          (taskTab.value === "deleted" && todo.trash) ||
          (taskTab.value === "completed" && todo.isFinish)
      )
    );
    const handleTabActivation = (value, e) => {
      e.preventDefault();
      taskTab.value = value;
    };

    return {
      handleTabActivation,
      todoState,
      todoData2,
      todoData,
      taskTab,
    };
  },
});
</script>
