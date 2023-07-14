<template>
  <sdPageHeader title="Note" class="ninjadash-page-header-main"> </sdPageHeader>

  <Main>
    <NoteWrapper>
      <a-row class="justify-content-center" :gutter="25">
        <a-col class="trigger-col" :xxl="5" :xl="7" :lg="9" :xs="24">
          <sdButton
            v-if="responsive <= 991"
            type="link"
            class="mail-sidebar-trigger"
            :style="{ marginTop: 0 }"
            @click="toggleCollapsed"
          >
            <unicon :name="collapsed ? 'align-left' : 'align-right'"></unicon>
          </sdButton>

          <div v-if="responsive > 991" class="sidebar-card">
            <sdCards headless>
              <div class="note-sidebar-top">
                <sdButton
                  @click="showModal"
                  shape="round"
                  type="primary"
                  size="default"
                  block
                >
                  <unicon name="plus" width="18"></unicon> Add Notes
                </sdButton>
              </div>

              <div class="note-sidebar-bottom">
                <NoteNav>
                  <ul>
                    <li>
                      <router-link :to="`${path}/all`">
                        <unicon name="edit" width="18"></unicon>
                        <span class="nav-text">
                          <span>All</span>
                        </span>
                      </router-link>
                    </li>
                    <li>
                      <router-link :to="`${path}/favorite`">
                        <unicon name="star" width="18"></unicon>
                        <span class="nav-text">
                          <span>Favorites</span>
                        </span>
                      </router-link>
                    </li>
                  </ul>
                  <div class="nav-labels">
                    <p>
                      <img
                        :src="require('@/static/img/icon/label.png')"
                        alt="icon"
                      />
                      Labels
                    </p>
                    <ul>
                      <li>
                        <router-link :to="`${path}/personal`">
                          <Bullet class="personal" /> Personal
                        </router-link>
                      </li>
                      <li>
                        <router-link :to="`${path}/work`">
                          <Bullet class="work" /> Work
                        </router-link>
                      </li>
                      <li>
                        <router-link :to="`${path}/social`">
                          <Bullet class="social" /> Social
                        </router-link>
                      </li>
                      <li>
                        <router-link :to="`${path}/important`">
                          <Bullet class="important" /> Important
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </NoteNav>
              </div>
            </sdCards>
          </div>

          <div
            v-else
            :class="
              collapsed
                ? 'sidebar-card note-sideabr show'
                : 'sidebar-card note-sideabr hide'
            "
          >
            <sdCards headless>
              <sdButton
                type="link"
                class="mail-sidebar-trigger trigger-close"
                :style="{ marginTop: 0 }"
                @click="toggleCollapsed"
              >
                <unicon name="times"></unicon>
              </sdButton>
              <div class="note-sidebar-top">
                <sdButton
                  @click="showModal"
                  shape="round"
                  type="primary"
                  size="default"
                  block
                >
                  <unicon name="plus" width="18"></unicon> Add Notes
                </sdButton>
              </div>

              <div class="note-sidebar-bottom">
                <NoteNav>
                  <ul>
                    <li>
                      <router-link :to="`${path}/all`" @click="collapseSidebar">
                        <unicon name="edit" width="18"></unicon>
                        <span class="nav-text">
                          <span>All</span>
                        </span>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        :to="`${path}/favorite`"
                        @click="collapseSidebar"
                      >
                        <unicon name="star" width="18"></unicon>
                        <span class="nav-text">
                          <span>Favorites</span>
                        </span>
                      </router-link>
                    </li>
                  </ul>
                  <div class="nav-labels">
                    <p>
                      <img
                        :src="require('@/static/img/icon/label.png')"
                        alt="icon"
                      />
                      Labels
                    </p>
                    <ul>
                      <li>
                        <router-link
                          :to="`${path}/personal`"
                          @click="collapseSidebar"
                        >
                          <Bullet class="personal" /> Personal
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          :to="`${path}/work`"
                          @click="collapseSidebar"
                        >
                          <Bullet class="work" /> Work
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          :to="`${path}/social`"
                          @click="collapseSidebar"
                        >
                          <Bullet class="social" /> Social
                        </router-link>
                      </li>
                      <li>
                        <router-link
                          :to="`${path}/important`"
                          @click="collapseSidebar"
                        >
                          <Bullet class="important" /> Important
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </NoteNav>
              </div>
            </sdCards>
          </div>
        </a-col>
        <a-col :xxl="19" :xl="17" :lg="15" :xs="24">
          <router-view name="child"></router-view>
        </a-col>
      </a-row>
    </NoteWrapper>
    <a-modal
      :type="modalType"
      :title="null"
      :visible="visible"
      :footer="null"
      :onCancel="handleCancel"
    >
      <div class="project-modal">
        <BasicFormWrapper>
          <a-form
            name="createProject"
            :model="formState"
            @finish="handleOk"
            :layout="formState.layout"
          >
            <a-form-item name="title" label="Title">
              <a-input
                v-model:value="formState.title"
                placeholder="Note Title"
              />
            </a-form-item>

            <a-form-item name="description" label="Description">
              <a-textarea
                v-model:value="formState.description"
                :rows="4"
                placeholder="Note Description"
              />
            </a-form-item>
            <a-form-item name="label" label="Note Label">
              <a-select v-model:value="formState.label" style="width: 100%">
                <a-select-option value="personal">Personal</a-select-option>
                <a-select-option value="work">Work</a-select-option>
                <a-select-option value="social">Social</a-select-option>
                <a-select-option value="important">Important</a-select-option>
              </a-select>
            </a-form-item>
            <sdButton
              htmlType="submit"
              size="default"
              type="primary"
              key="submit"
            >
              Add New Note
            </sdButton>
          </a-form>
        </BasicFormWrapper>
      </div>
    </a-modal>
  </Main>
</template>
<script>
import { NoteNav, NoteWrapper, Bullet } from "./style";
import { BasicFormWrapper, Main } from "../../styled";
import { useStore } from "vuex";
import { computed, onMounted, reactive, ref, defineComponent } from "vue";
import { useRoute } from "vue-router";

const Note = defineComponent({
  name: "Note",
  components: { NoteNav, NoteWrapper, Bullet, BasicFormWrapper, Main },
  setup() {
    const { state, dispatch } = useStore();
    const noteData = computed(() => state.note.data);
    const { matched } = useRoute();
    const { path } = matched[1];

    const visible = ref(false);
    const modalType = ref("primary");
    const checked = ref([]);
    const responsive = ref(0);
    const collapsed = ref(false);

    const formState = reactive({
      title: "",
      description: "",
      label: "personal",
      layout: "vertical",
    });

    onMounted(() => {
      function updateSize() {
        const width = window.innerWidth;
        responsive.value = width;
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      // return () => window.removeEventListener('resize', updateSize);
    });

    const showModal = () => {
      visible.value = true;
    };

    const onCancel = () => {
      visible.value = false;
    };

    const handleOk = (values) => {
      onCancel();
      const arrayData = [];
      noteData.value.map((data) => {
        return arrayData.push(data.key);
      });
      const max = Math.max(...arrayData);
      dispatch("noteAddData", [
        ...noteData.value,
        {
          ...values,
          key: max + 1,
          time: new Date().getTime(),
          stared: false,
        },
      ]);
    };

    const handleCancel = () => {
      onCancel();
    };

    const toggleCollapsed = () => {
      collapsed.value = !collapsed.value;
    };

    const collapseSidebar = () => {
      collapsed.value = false;
    };

    return {
      collapseSidebar,
      toggleCollapsed,
      handleCancel,
      handleOk,
      showModal,
      path,
      modalType,
      checked,
      responsive,
      collapsed,
      visible,
      formState,
    };
  },
});

export default Note;
</script>
