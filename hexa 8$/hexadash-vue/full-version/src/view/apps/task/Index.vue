<template>
  <sdPageHeader :pageRoute="[]" title="Task" class="ninjadash-page-header-main">
  </sdPageHeader>
  <Main>
    <a-row :gutter="25">
      <a-col :xl="5" :lg="6" :md="7" :xs="24">
        <template v-if="responsive > 767">
          <SidebarWrap class="mb-30">
            <div class="ninjadash_taskApp-sidebar">
              <sdButton
                class="ninjadash_btn-add"
                size="lg"
                type="primary"
                raised
                @click="showModal"
              >
                <unicon name="plus" width="16"></unicon>
                Add Task
              </sdButton>
              <ul class="ninjadash_taskApp-sidebar__nav">
                <li class="ninjadash_taskApp-sidebar__nav--item">
                  <router-link
                    class="ninjadash_taskApp-sidebar__nav--link"
                    :to="`${path}/all`"
                  >
                    <span class="nav-item-icon">
                      <unicon name="edit" width="16"></unicon>
                    </span>
                    <span class="nav-item-text">All</span>
                  </router-link>
                </li>
                <li class="ninjadash_taskApp-sidebar__nav--item">
                  <router-link
                    class="ninjadash_taskApp-sidebar__nav--link"
                    :to="`${path}/favorites`"
                  >
                    <span class="nav-item-icon">
                      <unicon name="star" width="16"></unicon>
                    </span>
                    <span class="nav-item-text">Favorite</span>
                  </router-link>
                </li>
                <li class="ninjadash_taskApp-sidebar__nav--item">
                  <router-link
                    class="ninjadash_taskApp-sidebar__nav--link"
                    :to="`${path}/completed`"
                  >
                    <span class="nav-item-icon">
                      <unicon name="check" width="16"></unicon>
                    </span>
                    <span class="nav-item-text">Completed</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </SidebarWrap>
          <sdModal
            title="Add Task"
            class="ninjadash_addTask-modal"
            :type="modalType"
            :visible="visible"
            :footer="null"
            :onCancel="handleCancel"
          >
            <div class="ninjadash_addTask-modal-inner">
              <BasicFormWrapper>
                <a-form
                  :model="formState"
                  name="add-task"
                  @finish="handleAddTask"
                  :layout="formState.layout"
                >
                  <a-form-item name="title">
                    <a-input
                      v-model:value="formState.title"
                      placeholder="Title"
                    />
                  </a-form-item>

                  <a-form-item name="description">
                    <a-textarea
                      v-model:value="formState.description"
                      :rows="4"
                      placeholder="Add Description"
                    />
                  </a-form-item>
                  <div class="ninjadash-modal-actions">
                    <sdButton
                      size="sm"
                      type="light"
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
                      Add Task
                    </sdButton>
                  </div>
                </a-form>
              </BasicFormWrapper>
            </div>
          </sdModal>
        </template>

        <FixedSidebar v-else :class="collapsed ? 'show' : 'hide'">
          <a to="#" type="link" class="trigger-close" @click="toggleCollapsed">
            <unicon name="times"></unicon>
          </a>
          <SidebarWrap class="mb-30">
            <div class="ninjadash_taskApp-sidebar">
              <sdButton
                class="ninjadash_btn-add"
                size="lg"
                type="primary"
                raised
                @click="showModal"
              >
                <unicon name="plus" width="16"></unicon>
                Add Task
              </sdButton>
              <ul class="ninjadash_taskApp-sidebar__nav">
                <li class="ninjadash_taskApp-sidebar__nav--item">
                  <router-link
                    class="ninjadash_taskApp-sidebar__nav--link"
                    :to="`${path}/all`"
                  >
                    <span class="nav-item-icon">
                      <unicon name="edit" width="16"></unicon>
                    </span>
                    <span class="nav-item-text">All</span>
                  </router-link>
                </li>
                <li class="ninjadash_taskApp-sidebar__nav--item">
                  <router-link
                    class="ninjadash_taskApp-sidebar__nav--link"
                    :to="`${path}/favorites`"
                  >
                    <span class="nav-item-icon">
                      <unicon name="star" width="16"></unicon>
                    </span>
                    <span class="nav-item-text">Favorite</span>
                  </router-link>
                </li>
                <li class="ninjadash_taskApp-sidebar__nav--item">
                  <router-link
                    class="ninjadash_taskApp-sidebar__nav--link"
                    :to="`${path}/completed`"
                  >
                    <span class="nav-item-icon">
                      <unicon name="check" width="16"></unicon>
                    </span>
                    <span class="nav-item-text">Completed</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </SidebarWrap>
        </FixedSidebar>
      </a-col>
      <a-col :xl="19" :lg="18" :md="17" :xs="24">
        <div
          v-if="responsive <= 767"
          class="sidebar-trier-wrap text-center mb-30"
        >
          <sdButton
            type="primary"
            class="sidebar-trigger"
            :style="{ marginTop: 0 }"
            @click="toggleCollapsed"
          >
            <unicon :name="collapsed ? 'align-left' : 'align-right'"></unicon>
          </sdButton>
        </div>

        <router-view name="child"></router-view>
      </a-col>
    </a-row>
    <span
      role="button"
      tabIndex="0"
      :class="collapsed ? 'overlay-dark show' : 'overlay-dark'"
      @click="toggleCollapsed"
    />
  </Main>
</template>
<script>
import { FixedSidebar, SidebarWrap } from "./style";
import { Main, BasicFormWrapper } from "../../styled";
import { useStore } from "vuex";
import { computed, watchEffect, ref, reactive, defineComponent } from "vue";
import { useRoute } from "vue-router";

const Task = defineComponent({
  name: "Task",
  components: { FixedSidebar, SidebarWrap, Main, BasicFormWrapper },
  setup() {
    const { state, dispatch } = useStore();
    const taskData = computed(() => state.task.data);
    const responsive = ref(0);
    const collapsed = ref(false);
    const visible = ref(false);
    const modalType = ref("primary");
    const { matched } = useRoute();
    const { path } = matched[1];

    const showModal = () => {
      visible.value = true;
      collapsed.value = false;
    };
    const handleCancel = () => {
      visible.value = false;
    };

    const formState = reactive({
      title: "",
      description: "",
      layout: "vertical",
    });

    const handleAddTask = (values) => {
      handleCancel();
      const arrayData = [];
      taskData.value.map((data) => {
        return arrayData.push(data.id);
      });
      const max = Math.max(...arrayData);
      dispatch("taskAddData", [
        ...taskData.value,
        {
          ...values,
          id: max + 1,
          favourite: false,
          completed: false,
        },
      ]);
    };

    watchEffect(() => {
      function updateSize() {
        const width = window.innerWidth;
        responsive.value = width;
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      // return () => window.removeEventListener('resize', updateSize);
    });

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };

    return {
      taskData,
      responsive,
      collapsed,
      visible,
      modalType,
      showModal,
      handleCancel,
      handleAddTask,
      toggleCollapsed,
      formState,
      path,
    };
  },
});

export default Task;
</script>
