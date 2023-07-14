<template>
  <TodoStyleWrapper>
    <BorderLessHeading>
      <sdCards :title="title">
        <template #button>
          <slot name="tab"></slot>
        </template>
        <TaskListStyle>
          <template v-if="todoData.length">
            <div class="ninjadash-tassklist-wrap">
              <div class="ninjadash-tasklist-body">
                <draggable
                  v-model="myList"
                  tag="ul"
                  group="people"
                  handle=".handle"
                  item-key="name"
                  class="ninjadash-tasklist"
                >
                  <template #item="{ element }">
                    <li class="ninjadash-tasklist-item">
                      <div class="ninjadash-tasklist-item__content">
                        <div class="ninjadash-tasklist-item__title">
                          <a-checkbox v-model:checked="element.isFinish">{{
                            element.item
                          }}</a-checkbox>
                        </div>
                      </div>

                      <div class="ninjadash-tasklist-item__action">
                        <!-- <router-link
                        v-if="isApp"
                        class="btn-icon"
                        type="info"
                        to="#"
                        shape="circle"
                      >
                        <unicon name="edit" width="16"></unicon>
                      </router-link> -->
                        <router-link
                          @click="onHandleDelete(element.key)"
                          class="ninjadash-delete"
                          to="#"
                        >
                          <unicon name="trash-alt"></unicon>
                        </router-link>
                      </div>
                    </li>
                  </template>
                </draggable>
              </div>
            </div>
          </template>
          <div v-else class="ninjadash-tasklist-empty">
            <span>Sorry !! No {{ status }} Task Found :(</span>
          </div>
        </TaskListStyle>
      </sdCards>
    </BorderLessHeading>
  </TodoStyleWrapper>
</template>
<script>
import { TodoStyleWrapper } from "./style";
import { useStore } from "vuex";
import { computed, ref, defineComponent } from "vue";
import draggable from "vuedraggable";
import { TaskListStyle } from "../tasklist/Style";
import PropTypes from "vue-types";
import { BorderLessHeading } from "../../view/styled";

const columns = [
  {
    title: "",
    dataIndex: "item",
  },
  {
    title: "",
    dataIndex: "action",
    width: 120,
  },
];

export default defineComponent({
  name: "ToDo",
  props: {
    todoData: PropTypes.array.def([]),
    showModal: PropTypes.func,
    isApp: PropTypes.bool.def(false),
    title: PropTypes.string.def("Todo List"),
    status: PropTypes.string,
  },
  components: {
    TodoStyleWrapper,
    draggable,
    TaskListStyle,
    BorderLessHeading,
  },
  setup() {
    const { state, dispatch } = useStore();
    const todoData = computed(() => state.todo.data);
    const visible = ref(false);
    const selectedRowKeys = ref([]);

    const onHandleDelete = (key) => {
      const data = todoData.value.map((item) => {
        if (item.key === key) {
          return {
            ...item,
            trash: true,
          };
        } else {
          return item;
        }
      });
      dispatch("ToDoDeleteData", data);
    };

    const onSelectChange = (selectedRowKey) => {
      if (selectedRowKeys.value.includes(selectedRowKey)) {
        const row = selectedRowKeys.value.filter(
          (value) => value !== selectedRowKey
        );
        selectedRowKeys.value = row;
      } else {
        selectedRowKeys.value.push(selectedRowKey);
      }
    };

    return {
      onHandleDelete,
      onSelectChange,
      columns,
      visible,
      dispatch,
      selectedRowKeys,
    };
  },
  computed: {
    myList: {
      get() {
        return this.todoData;
      },
      set(value) {
        this.$store.dispatch("ToDoAddData", value);
      },
    },
  },
});
</script>
