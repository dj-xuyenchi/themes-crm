<template>
  <sdPageHeader
    title="Todo"
    class="ninjadash-page-header-main"
    :routes="pageRoutes"
  ></sdPageHeader>

  <Main>
    <a-row :gutter="30">
      <a-col :md="24">
        <TodoStyleWrapper>
          <sdCards title="Task Lists">
            <TableWrapper class="table-responsive">
              <div class="ant-table-content">
                <table class="ant-table">
                  <draggable
                    v-model="myList"
                    tag="tbody"
                    group="people"
                    handle=".handle"
                    item-key="name"
                  >
                    <template #item="{ element }">
                      <tr>
                        <td>
                          <a-checkbox
                            @click="() => onSelectChange(element.key)"
                          />
                        </td>
                        <td scope="row">
                          <div class="user-info">
                            {{ element.item }}
                          </div>
                        </td>
                        <td>
                          <div class="todos-action">
                            <unicon
                              class="handle"
                              :style="{ cursor: 'pointer', color: '#999' }"
                              name="expand-arrows"
                              width="14"
                              height="14"
                            ></unicon>
                            <a
                              :class="element.favorite ? 'star active' : 'star'"
                              @click="
                                () =>
                                  dispatch('onTodoStarUpdate', {
                                    data: todoData,
                                    id: element.key,
                                  })
                              "
                              to="#"
                            >
                              <unicon
                                name="star"
                                :style="{
                                  color: element.favorite ? 'gold' : '#888',
                                }"
                                :width="16"
                              ></unicon>
                            </a>
                            <a
                              @click="() => onHandleDelete(element.key)"
                              to="#"
                            >
                              <unicon name="trash-alt" width="16"></unicon>
                            </a>
                          </div>
                        </td>
                      </tr>
                    </template>
                  </draggable>
                </table>
              </div>
            </TableWrapper>
            <div class="new-todo-wrap">
              <sdButton
                @click="showModal"
                class="btn-toDoAdd"
                transparented
                type="primary"
                size="lg"
              >
                + Add New Task
              </sdButton>
            </div>
          </sdCards>
        </TodoStyleWrapper>
      </a-col>
    </a-row>
    <sdModal
      type="primary"
      title="Add New Todo"
      :visible="visible"
      :footer="null"
      :onCancel="handleCancel"
    >
      <div class="todo-modal">
        <BasicFormWrapper>
          <a-form
            class="adTodo-form"
            name="todoAdd"
            :model="formState"
            @finish="onSubmitHandler"
          >
            <a-input
              v-model:value="formState.todoAdd"
              placeholder="Input Item Name......."
            />
            <br />
            <br />

            <sdButton
              @click="showModal"
              htmlType="submit"
              class="btn-adTodo"
              type="primary"
              size="lg"
            >
              Add New
            </sdButton>
          </a-form>
        </BasicFormWrapper>
      </div>
    </sdModal>
  </Main>
</template>
<script>
import { TodoStyleWrapper } from "./style";
import { Main, TableWrapper, BasicFormWrapper } from "../../styled";
import { useStore } from "vuex";
import { computed, reactive, ref, defineComponent } from "vue";
import draggable from "vuedraggable";

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

const pageRoutes = [
  {
    path: "app",
    breadcrumbName: "App",
  },
  {
    path: "todo",
    breadcrumbName: "Todo",
  },
];

const ToDo = defineComponent({
  name: "ToDo",
  components: {
    TodoStyleWrapper,
    Main,
    TableWrapper,
    BasicFormWrapper,
    draggable,
  },
  setup() {
    const { state, dispatch } = useStore();
    const todoData = computed(() => state.todo.data);
    const visible = ref(false);
    const selectedRowKeys = ref([]);
    const onHandleDelete = (key) => {
      const data = todoData.value.filter((item) => item.key !== key);
      dispatch("ToDoDeleteData", data);
    };
    const formState = reactive({
      todoAdd: "",
    });

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

    const onSubmitHandler = () => {
      const arrayData = [];
      todoData.value.map((data) => {
        return arrayData.push(data.key);
      });
      const max = Math.max(...arrayData);
      if (formState.todoAdd !== "") {
        dispatch("ToDoAddData", [
          ...todoData.value,
          {
            key: max + 1,
            item: formState.todoAdd,
            time: new Date().getTime(),
            favorite: false,
          },
        ]);

        formState.todoAdd = "";
        visible.value = false;
      } else {
        alert("Please Give a Task Title...");
      }
    };

    const showModal = () => {
      visible.value = true;
    };

    const onCancel = () => {
      visible.value = false;
    };

    const handleCancel = () => {
      onCancel();
    };

    return {
      handleCancel,
      onCancel,
      showModal,
      onSubmitHandler,
      onHandleDelete,
      onSelectChange,
      columns,
      formState,
      visible,
      dispatch,
      todoData,
      selectedRowKeys,
      pageRoutes,
    };
  },
  computed: {
    myList: {
      get() {
        return this.$store.state.todo.data;
      },
      set(value) {
        this.$store.dispatch("ToDoAddData", value);
      },
    },
  },
});

export default ToDo;
</script>
