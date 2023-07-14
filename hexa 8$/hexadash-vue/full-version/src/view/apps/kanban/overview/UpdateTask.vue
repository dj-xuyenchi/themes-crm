<template>
  <sdModal
    class="ninjadash_task-details"
    :visible="modalVisible"
    :footer="null"
    :onCancel="handleCancel"
  >
    <template #title>
      <div class="ant-modal-title">
        <sdHeading as="h4">{{ data.title }}</sdHeading>
        <span class="sub-text">in list Active Project</span>
      </div>
    </template>
    <div class="ninjadash_task-details-modal">
      <div class="ninjadash_task-details-modal__description">
        <span class="ninjadash_task-details__label">Description</span>
        <a-textarea
          name="task-details-label"
          placeholder="Add a more detailed description…"
        />
      </div>
    </div>
    <div v-if="isLoading"></div>
    <ChecklistWrap v-else>
      <div class="ninjadash_checklist-block">
        <div class="addChecklist-wrap">
          <sdButton
            @click="handleTaskEdit"
            class="btn-checklist"
            type="primary"
          >
            <unicon name="check-square" width="14"></unicon>
            <span>Add Checklist</span>
          </sdButton>

          <div v-if="editable" class="addChecklist-form">
            <a-input
              name="checkListInputValue"
              class="add-checklist"
              placeholder="Checklist Title"
              @pressEnter="
                () => onCheckListSubmit(data.id, data.boardId, data.checklist)
              "
            />
            <div class="addChecklist-form-action">
              <sdButton
                @click="
                  () => onCheckListSubmit(data.id, data.boardId, data.checklist)
                "
                class="btn-add"
                size="sm"
                type="primary"
              >
                Add
              </sdButton>
              <a @click="onCancelEdit" href="#">
                <unicon name="times" width="18"></unicon>
              </a>
            </div>
          </div>
        </div>
        <div class="ninjadash_checklist-row">
          <div
            v-for="(item, i) in data.checklist"
            class="ninjadash_checklist-item"
            :key="i"
          >
            <div class="ninjadash_checklist-item__top">
              <h4 class="ninjadash_checklist-item__title">{{ item.label }}</h4>
              <sdButton
                @click="
                  (event) =>
                    onCheckListDelete(
                      data.id,
                      data.boardId,
                      data.checklist,
                      item.id,
                      event
                    )
                "
                class="btn-delete"
                type="light"
              >
                Delete
              </sdButton>
            </div>
            <div class="ninjadash_checklist__progress">
              <a-progress
                v-if="item.checkListTask.length"
                :percent="
                  Math.round(
                    (100 *
                      item.checkListTask.filter(
                        (checked) => checked.checked === true
                      ).length) /
                      item.checkListTask.length
                  )
                "
              />
            </div>
            <div class="ninjadash_checklist-tasks-wrap">
              <ul class="ninjadash_checklist-tasks">
                <li
                  v-for="(task, i) in item.checkListTask"
                  class="ninjadash_checklist-tasks__single"
                  :key="i"
                >
                  <a-checkbox
                    v-model:checked="task.checked"
                    @change="
                      (e) => onChange(e.target.checked, item.id, task.id)
                    "
                  >
                    <span class="ninjadash_task-label">{{ task.label }}</span>
                  </a-checkbox>
                  <sdDropdown
                    :action="['click']"
                    class="wide-dropdwon kanbanCard-more"
                  >
                    <template #overlay>
                      <a
                        @click="() => onCheckListItemDelete(item.id, task.id)"
                        href="#"
                      >
                        <span>Delete List</span>
                      </a>
                    </template>
                    <a href="#" class="btn-more">
                      <unicon name="ellipsis-h" width="14"></unicon>
                    </a>
                  </sdDropdown>
                </li>
              </ul>
              <div class="addChecklistTask-wrap">
                <sdButton
                  v-if="checkListPopup !== `cp-${item.id}`"
                  @click="() => onShowChecklistAddPopup(`cp-${item.id}`)"
                  class="add-item"
                  type="light"
                >
                  Add an Item
                </sdButton>

                <div v-else class="addChecklistTask-form">
                  <a-input
                    name="checkListAddInputValue"
                    class="add-checklistTask"
                    placeholder="Checklist Title"
                    @pressEnter="
                      () => onCheckListItemAdd(item.id, item.checkListTask)
                    "
                  />
                  <div class="addChecklistTask-form-action">
                    <sdButton
                      @click="
                        () => onCheckListItemAdd(item.id, item.checkListTask)
                      "
                      class="btn-add"
                      size="sm"
                      type="primary"
                    >
                      Add
                    </sdButton>
                    <a @click="onHideChecklistAddPopup" href="#">
                      <unicon name="times" width="18"></unicon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChecklistWrap>
  </sdModal>
</template>
<script>
import { computed, toRefs, ref, defineComponent } from "vue";
import propTypes from "vue-types";
import { useStore } from "vuex";
import { ChecklistWrap } from "../style";

export default defineComponent({
  name: "UpdateTaskList",
  components: { ChecklistWrap },
  props: {
    data: propTypes.object,
    modalVisible: propTypes.bool,
    handleCancel: propTypes.func,
  },
  setup(props) {
    const { data } = toRefs(props);
    const { state, dispatch } = useStore();
    const tasks = computed(() => state.KanbanBoard.taskData);
    const isLoading = computed(() => state.KanbanBoard.tsLoading);

    const editable = ref(false);
    const checkListPopup = ref("");

    const handleTaskEdit = () => {
      editable.value = !editable.value;
    };

    const onCancelEdit = (e) => {
      e.preventDefault();
      editable.value = false;
    };

    const onChange = (value, listId, taskId) => {
      tasks.value.map((task) => {
        if (data.value.id === task.id) {
          task.checklist.map((list) => {
            if (list.id === listId) {
              list.checkListTask.map((item) => {
                if (item.id === taskId) item.checked = value;
                return item;
              });
            }
            return list;
          });
        }
        return task;
      });
      dispatch("ToAddTask", tasks.value);
    };

    const onCheckListItemDelete = (listId, taskId) => {
      const confirm = window.confirm("Are you sure to delete this?");
      if (confirm) {
        tasks.value.map((task) => {
          if (data.value.id === task.id) {
            task.checklist.map((list) => {
              if (list.id === listId) {
                const afterDeleteData = list.checkListTask.filter(
                  (item) => item.id !== taskId
                );
                list.checkListTask = afterDeleteData;
              }
              return list;
            });
          }
          return task;
        });

        dispatch("ToAddTask", tasks.value);
      }
      return false;
    };

    const onCheckListItemAdd = (listId, checkListTask) => {
      const arrayData = [];
      const checkItem = document.querySelector(
        `input[name="checkListAddInputValue"]`
      ).value;
      checkListTask.map((item) => {
        return arrayData.push(item.id);
      });
      const max = checkListTask.length ? Math.max(...arrayData) : 0;
      tasks.value.map((task) => {
        if (data.value.id === task.id) {
          task.checklist.map((list) => {
            if (list.id === listId) {
              list.checkListTask = [
                ...checkListTask,
                {
                  id: `${max + 1}`,
                  label: checkItem,
                  checked: false,
                },
              ];
            }
            return list;
          });
        }
        return task;
      });
      dispatch("ToAddTask", tasks.value);
      checkListPopup.value = "";
    };

    const onCheckListSubmit = (id, boardId, checkList) => {
      const arrayData = [];
      const checkItem = document.querySelector(
        `input[name="checkListInputValue"]`
      ).value;
      checkList.map((item) => {
        return arrayData.push(item.id);
      });
      const max = checkList.length ? Math.max(...arrayData) : 0;
      tasks.value.map((item) => {
        if (item.id === id && item.boardId === boardId) {
          return (item.checklist = [
            ...checkList,
            { id: `${max + 1}`, label: checkItem, checkListTask: [] },
          ]);
        }
        return item;
      });
      dispatch("ToAddTask", tasks.value);
      editable.value = false;
    };

    const onCheckListDelete = (id, boardId, checkList, delId, event) => {
      event.preventDefault();
      const confirm = window.confirm("Are you sure to delete this?");
      if (confirm) {
        tasks.value.map((item) => {
          if (item.id === id && item.boardId === boardId) {
            return (item.checklist = checkList.filter(
              (listItem) => listItem.id !== delId
            ));
          }
          return item;
        });
        dispatch("ToAddTask", tasks.value);
      }
      return false;
    };

    const onShowChecklistAddPopup = (id) => {
      checkListPopup.value = id;
    };

    const onHideChecklistAddPopup = () => {
      checkListPopup.value = "";
    };

    return {
      onCheckListItemDelete,
      onCheckListItemAdd,
      onCheckListSubmit,
      onCheckListDelete,
      onShowChecklistAddPopup,
      onHideChecklistAddPopup,

      tasks,
      editable,
      checkListPopup,
      handleTaskEdit,
      onCancelEdit,
      onChange,
      isLoading,
    };
  },
});
</script>
