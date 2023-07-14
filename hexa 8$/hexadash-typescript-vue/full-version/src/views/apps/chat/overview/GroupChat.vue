<script setup lang="ts">
import dayjs from 'dayjs';
import { BlockSpan, ChatWrapper } from '../style';
import { textRefactor } from '../../../../components/utilities/utilities';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

const { state, dispatch } = useStore();
const match = computed(() => useRoute());

function sortByTime(a: any, b: any) {
  return b.time - a.time;
}

const chatData = computed(() => {
  const sortedData = [...state.chat.groupChat.data].sort(sortByTime);
  return sortedData;
});

const dataFiltering = (e: Event, id: Number) => {
  e.preventDefault();
  dispatch('filterSinglepageGroup', id);
};
</script>

<template>
  <ChatWrapper>
    <div class="create-action">
      <sdButton class="btn-add" size="default" type="default" shape="circle" block>
        <unicon name="edit" width="14"></unicon>
        Create New Group
      </sdButton>
    </div>
    <ul v-if="chatData">
      <li v-for="({ groupName, content, id, img }, key) in chatData" :key="key + 1" class="chat-link-signle">
        <router-link @click="(e: any) => dataFiltering(e, id)" :to="id">
          <div class="author-figure">
            <img :src="`/src/assets/img/chat-author/${img}`" alt="" />
          </div>

          <div class="author-info">
            <BlockSpan class="author-name">{{ groupName }}</BlockSpan>
            <BlockSpan class="author-chatText">
              {{ textRefactor(content[content.length - 1].content, 5) }}
            </BlockSpan>
          </div>
          <div class="author-chatMeta">
            <BlockSpan>{{
              dayjs(content[content.length - 1].time).format('MM-DD-YYYY') === dayjs().format('MM-DD-YYYY')
                ? dayjs(id).format('hh:mm A')
                : dayjs(id).format('dddd')
            }}</BlockSpan>
            <a-badge v-if="key <= 1" class="badge-success" :count="3" />
          </div>
        </router-link>
      </li>
    </ul>
  </ChatWrapper>
</template>
