<script setup lang="ts">
import { computed, ref, reactive } from 'vue';
import propTypes from 'vue-types';
import { TaskListStyle } from './Style';
import { BasicFormWrapper } from '@/views/styled';
import { useStore } from 'vuex';

interface EditableItem {
  id: string;
  title: string;
  description: string;
  favourite: boolean;
  completed: boolean;
}

interface FormState {
  description: string;
  title: string;
  favorite: boolean;
  completed: boolean;
}

const props = defineProps({
  header: propTypes.string,
  description: propTypes.bool,
  taskStatus: propTypes.string,
  taskLimit: propTypes.number,
});

const { state, dispatch } = useStore();
const task = computed(() => state.task.data);

const visible = ref(false);
const confirmVisible = ref(false);
const updateData = ref({});
const taskDeleteId = ref('');
const editableItem = ref<EditableItem>({ id: '', title: '', description: '', favourite: false, completed: false });

const formState = reactive<FormState>({
  description: '',
  title: '',
  favorite: false,
  completed: false,
});

const showModal = (id: number, item: any) => {
  updateData.value = item;
  visible.value = true;
  editableItem.value = item;

  formState.description = item.description;
  formState.title = item.title;
  formState.favorite = item.favourite;
  formState.completed = item.completed;
};

const handleTaskDelete = (id: string) => {
  taskDeleteId.value = id;
  confirmVisible.value = true;
};

const handleCancel = () => {
  visible.value = false;
  confirmVisible.value = false;
};

const ConfirmTaskDelete = (id: string) => {
  let value = task.value.filter((item: any) => item.id !== id);
  dispatch('ontaskDelete', value);

  visible.value = false;
  confirmVisible.value = false;
};

const onEditHandle = (editableData: any, id: string) => {
  const updatedData = task.value.map((item: any) => {
    if (item.id === id) {
      // eslint-disable-next-line no-param-reassign
      item = editableData;
      return item;
    }
    return item;
  });

  dispatch('ontaskEdit', updatedData);
  visible.value = false;
};

const favorite = computed(() => task.value.filter((item: any) => item.favourite));
const completed = computed(() => task.value.filter((item: any) => item.completed));
const handleFinish = (eData: any) => onEditHandle(eData, editableItem.value.id);
</script>

<template>
  <TaskListStyle>
    <div class="ninjadash-tassklist-wrap">
      <div v-if="header !== ''" class="ninjadash-tasklist-head">
        <h2 class="ninjadash-tasklist-head__title">{{ header }}</h2>
      </div>

      <div class="ninjadash-tasklist-body">
        <template v-if="taskStatus === 'favourite'">
          <ul v-if="favorite.length" class="ninjadash-tasklist">
            <li v-for="(item, i) in favorite" class="ninjadash-tasklist-item" :key="i">
              <div class="ninjadash-tasklist-item__content">
                <div class="ninjadash-tasklist-item__title">
                  <a-checkbox
                    :checked="!!item.completed"
                    @change="
                      () =>
                        dispatch('onCompleteUpdate', {
                          data: task,
                          id: item.id,
                        })
                    "
                  >
                    {{ item.title }}
                  </a-checkbox>
                </div>

                <div v-if="description" class="ninjadash-tasklist-item__text">
                  <p>{{ item.description }}</p>
                </div>
              </div>
              <div class="ninjadash-tasklist-item__action">
                <router-link class="ninjadash-edit" to="#" @click="() => showModal(item.id, item)">
                  <unicon name="edit" width="14"></unicon>
                </router-link>
                <router-link
                  to="#"
                  :class="`${item.favourite ? 'task-favourite task-favorite--active' : 'task-favourite'}`"
                  @click="() => dispatch('onTaskStarUpdate', { data: task, id: item.id })"
                >
                  <unicon name="star"></unicon>
                </router-link>
                <router-link class="ninjadash-delete" to="#" @click="() => handleTaskDelete(item.id)">
                  <unicon name="times" width="14"></unicon>
                </router-link>
              </div>
            </li>
          </ul>

          <div v-else class="ninjadash-tasklist-empty">
            <span>Sorry !! No Favourite Task Found :(</span>
          </div>
        </template>

        <template v-else-if="taskStatus === 'completed'">
          <ul v-if="completed.length" class="ninjadash-tasklist">
            <li v-for="(item, i) in completed" class="ninjadash-tasklist-item" :key="i">
              <div class="ninjadash-tasklist-item__content">
                <div class="ninjadash-tasklist-item__title">
                  <a-checkbox
                    :checked="!!item.completed"
                    @change="
                      () =>
                        dispatch('onCompleteUpdate', {
                          data: task,
                          id: item.id,
                        })
                    "
                  >
                    {{ item.title }}
                  </a-checkbox>
                </div>

                <div v-if="description" class="ninjadash-tasklist-item__text">
                  <p>{{ item.description }}</p>
                </div>
              </div>
              <div class="ninjadash-tasklist-item__action">
                <router-link class="ninjadash-edit" to="#" @click="() => showModal(item.id, item)">
                  <unicon name="edit" width="14"></unicon>
                </router-link>
                <router-link
                  to="#"
                  :class="`${item.favourite ? 'task-favourite task-favorite--active' : 'task-favourite'}`"
                  @click="() => dispatch('onTaskStarUpdate', { data: task, id: item.id })"
                >
                  <unicon name="star"></unicon>
                </router-link>
                <router-link class="ninjadash-delete" to="#" @click="() => handleTaskDelete(item.id)">
                  <unicon name="times" width="14"></unicon>
                </router-link>
              </div>
            </li>
          </ul>

          <div v-else class="ninjadash-tasklist-empty">
            <span>Sorry !! No Completed Task Found :(</span>
          </div>
        </template>

        <template v-else>
          <ul v-if="task.length" class="ninjadash-tasklist">
            <li v-for="(item, i) in task" class="ninjadash-tasklist-item" :key="i">
              <div class="ninjadash-tasklist-item__content">
                <div class="ninjadash-tasklist-item__title">
                  <a-checkbox
                    :checked="!!item.completed"
                    @change="
                      () =>
                        dispatch('onCompleteUpdate', {
                          data: task,
                          id: item.id,
                        })
                    "
                  >
                    {{ item.title }}
                  </a-checkbox>
                </div>

                <div v-if="description" class="ninjadash-tasklist-item__text">
                  <p>{{ item.description }}</p>
                </div>
              </div>
              <div class="ninjadash-tasklist-item__action">
                <router-link class="ninjadash-edit" to="#" @click="() => showModal(item.id, item)">
                  <unicon name="edit" width="14"></unicon>
                </router-link>
                <router-link
                  to="#"
                  :class="`${item.favourite ? 'task-favourite task-favorite--active' : 'task-favourite'}`"
                  @click="() => dispatch('onTaskStarUpdate', { data: task, id: item.id })"
                >
                  <unicon name="star"></unicon>
                </router-link>
                <router-link class="ninjadash-delete" to="#" @click="() => handleTaskDelete(item.id)">
                  <unicon name="times" width="14"></unicon>
                </router-link>
              </div>
            </li>
          </ul>

          <div v-else class="ninjadash-tasklist-empty">
            <span>Sorry !! No Task Found :(</span>
          </div>
        </template>
      </div>
    </div>
    <a-modal
      title="Edit Task"
      class="ninjadash-addTask-modal"
      :visible="visible"
      :footer="null"
      @cancel="handleCancel"
      forceRender
    >
      <div class="ninjadash-addTask-modal-inner">
        <BasicFormWrapper>
          <a-form name="add-task" :model="formState" @finish="handleFinish">
            <a-form-item :rules="[{ required: true, message: 'Please add a Title' }]" :name="['title']">
              <a-input v-model:value="formState.title" placeholder="Title" />
            </a-form-item>
            <br /><br />
            <a-form-item name="description">
              <a-textarea v-model:value="formState.description" :rows="4" placeholder="Add Description" />
            </a-form-item>
            <br /><br /><br /><br /><br />
            <a-form-item v-model:value="formState.favorite" :hidden="true" name="favourite">
              <a-input />
            </a-form-item>
            <a-form-item v-model:value="formState.completed" :hidden="true" name="completed">
              <a-input />
            </a-form-item>
            <div class="ninjadash-modal-actions">
              <sdButton size="sm" type="light" key="cancel" :outlined="true" @click="handleCancel"> Cancel </sdButton>
              <sdButton htmlType="submit" size="sm" type="primary" key="submit"> Edit </sdButton>
            </div>
          </a-form>
        </BasicFormWrapper>
      </div>
    </a-modal>
    <a-modal
      title="Are You Sure to Delete This Task?"
      class="ninjaDash-delete-modal"
      type="primary"
      :visible="confirmVisible"
      :footer="null"
      @cancel="handleCancel"
      forceRender
    >
      <div class="ninjadash-delete-confirm">
        <div class="ninjadash-delete-confirm__action">
          <router-link to="#" @click="() => handleCancel()" class="ninjadash-delete-confirm__cancel">
            <span>No</span>
          </router-link>
          <router-link to="#" @click="() => ConfirmTaskDelete(taskDeleteId)">
            <span>Yes</span>
          </router-link>
        </div>
      </div>
    </a-modal>
  </TaskListStyle>
</template>
