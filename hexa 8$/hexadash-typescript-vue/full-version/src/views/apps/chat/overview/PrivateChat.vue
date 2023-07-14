<script setup lang="ts">
import dayjs from 'dayjs';
import { BlockSpan } from '../style';
import { textRefactor } from '../../../../components/utilities/utilities';
import { computed } from 'vue';
import { useStore } from 'vuex';

const { state, dispatch } = useStore();

function sortByTime(a: any, b: any) {
  return b.time - a.time;
}

const chatData = computed(() => {
  const sortedData = [...state.chat.privateChat.data].sort(sortByTime);
  return sortedData;
});

const dataFiltering = (e: any, email: any) => {
  e.preventDefault();
  dispatch('filterSinglePage', email);
};
</script>

<template>
  <ul v-if="chatData">
    <li
      v-for="(user, key) in chatData"
      @click="(e) => dataFiltering(e, user.email)"
      :key="key + 1"
      class="chat-link-signle"
    >
      <router-link :to="`${user.email}`">
        <div class="author-figure">
          <img :src="`/src/assets/img/chat-author/${user.img}`" alt="" />
          <span :class="user.active ? 'active' : 'inactive'" />
        </div>
        <div class="author-info">
          <BlockSpan class="author-name">{{ user.userName }}</BlockSpan>

          <BlockSpan class="author-chatText">
            {{ textRefactor(user.content[user.content.length - 1].content, 5) }}
          </BlockSpan>
        </div>
        <div class="author-chatMeta">
          <BlockSpan>{{
            dayjs(user.id).format('MM-DD-YYYY') === dayjs().format('MM-DD-YYYY')
              ? dayjs(user.id).format('hh:mm A')
              : dayjs(user.id).format('dddd')
          }}</BlockSpan>
          <a-badge v-if="key <= 1" class="badge-success" :count="3" />
        </div>
      </router-link>
    </li>
  </ul>
</template>
