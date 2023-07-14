<template>
  <TaskListWrap class="mb-30">
    <div class="ninjadash_tasklist-wrap">
      <div class="ninjadash_tasklist-head">
        <h2 class="ninjadash_task-list-title">Task Lists</h2>
      </div>
      <div class="ninjadash_tasklist-body">
        <ul v-if="task.length > 0" class="ninjadash_tasks">
          <li v-for="(item, i) in task" class="ninjadash_tasks-item" :key="i">
            <div class="ninjadash_tasks-item__content">
              <div class="ninjadash_tasks-item__title">
                <a-checkbox
                  :checked="!!item.completed"
                  @change="
                    () =>
                      dispatch('onCompleteUpdate', {
                        data: taskAll,
                        id: item.id,
                      })
                  "
                >
                  {{ item.title }}
                </a-checkbox>
              </div>
              <div class="ninjadash_tasks-item__text">
                <p>{{ item.description }}</p>
              </div>
            </div>

            <div class="ninjadash_tasks-item__action">
              <a
                to="#"
                :class="`${
                  item.favourite ? 'task-favourite active' : 'task-favourite'
                }`"
                @click="
                  () =>
                    dispatch('onTaskStarUpdate', { data: taskAll, id: item.id })
                "
              >
                <unicon name="star" width="14"></unicon>
              </a>
              <sdDropdown>
                <template #overlay>
                  <a to="#" @click="() => showModal(item.id, item)">
                    <unicon name="edit" width="14"></unicon>
                    <span>Edit</span>
                  </a>
                  <a to="#" @click="() => handleTaskDelete(item.id)">
                    <unicon name="trash-alt" width="14"></unicon>
                    <span>Delete</span>
                  </a>
                </template>
                <a to="#">
                  <unicon name="ellipsis-v" width="18"></unicon>
                </a>
              </sdDropdown>
            </div>
          </li>
        </ul>

        <div v-else class="ninjadash_empty-task">
          <span>Sorry !! No Task Found :(</span>
        </div>
      </div>
    </div>
    <sdModal
      title="Edit Task"
      class="ninjadash_addTask-modal"
      type="primary"
      :visible="visible"
      :footer="null"
      :onCancel="handleCancel"
    >
      <div class="ninjadash_addTask-modal-inner">
        <BasicFormWrapper>
          <a-form
            name="add-task"
            :model="formState"
            @finish="onEditHandle"
            layout="vertical"
          >
            <a-form-item name="title">
              <a-input v-model:value="formState.title" placeholder="Title" />
            </a-form-item>

            <a-form-item name="description">
              <a-textarea
                :rows="4"
                v-model:value="formState.description"
                placeholder="Add Description"
              />
            </a-form-item>
            <a-form-item hidden="true" name="favourite">
              <a-input v-model:value="formState.favourite" />
            </a-form-item>
            <a-form-item hidden="true" name="completed">
              <a-input v-model:value="formState.completed" />
            </a-form-item>

            <div class="ninjadash-modal-actions">
              <sdButton
                size="sm"
                type="white"
                key="cancel"
                outlined
                @click="handleCancel"
              >
                Cancel
              </sdButton>
              <sdButton
                htmlType="submit"
                size="sm"
                type="primary"
                key="submit"
              >
                Submit
              </sdButton>
            </div>
          </a-form>
        </BasicFormWrapper>
      </div>
    </sdModal>
  </TaskListWrap>
</template>
<script>
import { computed, ref, reactive, defineComponent } from "vue";
import { useStore } from "vuex";
import { BasicFormWrapper } from "../../../styled";
import { TaskListWrap } from "../style";

const Favorite = defineComponent({
  name: "Favorite",
  components: { BasicFormWrapper, TaskListWrap },
  setup() {
    const { state, dispatch } = useStore();
    const taskAll = computed(() => state.task.data);

    const task = computed(() =>
      state.task.data
        .filter((item) => item.favourite)
        .sort((a, b) => b.id - a.id)
    );
    const visible = ref(false);
    const taskEditId = ref("");
    const editableItem = ref({});

    let formState = reactive({
      title: "",
      description: "",
      favourite: "",
      completed: "",
      id: "",
    });

    const showModal = (id, item) => {
      taskEditId.value = id;
      visible.value = true;
      editableItem.value = item;
      formState.title = item.title;
      formState.description = item.description;
      formState.favourite = item.favourite;
      formState.completed = item.completed;
      formState.id = id;
    };

    const handleCancel = () => {
      visible.value = false;
    };

    const handleTaskDelete = (id) => {
      const value = taskAll.value.filter((item) => item.id !== id);
      dispatch("ontaskDelete", value);
    };

    const onEditHandle = (data) => {
      const updatedData = taskAll.value.map((item) => {
        if (item.id === formState.id) {
          // eslint-disable-next-line no-param-reassign
          item = data;
          return item;
        }
        return item;
      });

      visible.value = false;
      dispatch("ontaskEdit", updatedData);
    };

    return {
      task,
      visible,
      taskEditId,
      editableItem,
      showModal,
      handleCancel,
      handleTaskDelete,
      onEditHandle,
      dispatch,
      taskAll,
      formState,
    };
  },
});

export default Favorite;
</script>
