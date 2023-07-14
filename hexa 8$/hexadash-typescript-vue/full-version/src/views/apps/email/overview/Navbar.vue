<script setup lang="ts">
import { EmailNav } from './style';
import { ref } from 'vue';

const props = defineProps({
  path: {
    type: String,
  },
  toggleCollapsed: {
    type: Function,
  },
});

const labels = ref(['personal', 'social', 'promotions']);
const newLabel = ref('');
const addNewDisplay = ref(false);

const addNewLabels = (e: Event) => {
  e.preventDefault();
  addNewDisplay.value = true;
};

const cancelAddNewLabels = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  addNewDisplay.value = false;
};

const handelChange = (e: Event) => {
  e.preventDefault();
  e.stopPropagation();
  if (newLabel.value !== '') {
    labels.value = [...labels.value, newLabel.value];
    newLabel.value = '';
  } else {
    alert('Please Give a label...');
  }
};

const onLabelChange = (e: Event) => {
  newLabel.value = (e.target as HTMLInputElement).value;
};
</script>

<template>
  <EmailNav>
    <ul>
      <li>
        <router-link :to="`${path}inbox`" click="toggleCollapsed">
          <unicon name="inbox" width="18"></unicon>
          <span class="nav-text">
            <span>Inbox</span>
            <span class="badge badge-primary">3</span>
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="`${path}starred`" click="toggleCollapsed">
          <unicon name="star" width="18"></unicon>
          <span class="nav-text">
            <span>Starred</span>
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="`${path}sent`" click="toggleCollapsed">
          <unicon name="message" width="18"></unicon>
          <span class="nav-text">
            <span>Sent</span>
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="`${path}drafts`" click="toggleCollapsed">
          <unicon name="edit" width="18"></unicon>
          <span class="nav-text">
            <span>Drafts</span>
          </span>
          <span class="badge badge-primary">12</span>
        </router-link>
      </li>
      <li>
        <router-link :to="`${path}spam`" click="toggleCollapsed">
          <unicon name="exclamation-octagon" width="18"></unicon>
          <span class="nav-text">
            <span>Spam</span>
          </span>
        </router-link>
      </li>
      <li>
        <router-link :to="`${path}trash`" click="toggleCollapsed">
          <unicon name="trash-alt" width="18"></unicon>
          <span class="nav-text">
            <span>Trash</span>
          </span>
        </router-link>
      </li>
    </ul>
    <div class="nav-labels">
      <p>Labels</p>
      <ul>
        <li v-for="label in labels" :key="label">
          <a to="#"> <unicon name="list-ul" width="18"></unicon> {{ label }} </a>
        </li>

        <li class="add-label-btn" @click="addNewLabels" role="menuitem">
          <a @click="addNewLabels" href="#"> <unicon name="plus" width="18"></unicon> Add New Label </a>

          <div v-if="addNewDisplay" class="add-label">
            <form @submit="handelChange">
              <sdHeading as="h3">Add New Label</sdHeading>
              <a-input
                @change="onLabelChange"
                v-model:value="newLabel"
                :name="newLabel"
                type="text"
                placeholder="Enter label name"
              />
              <div class="btn-group">
                <sdButton size="default" @click="handelChange" type="primary"> Add Label </sdButton>
                <sdButton @click="cancelAddNewLabels" type="default"> Cancel </sdButton>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </div>
  </EmailNav>
</template>
