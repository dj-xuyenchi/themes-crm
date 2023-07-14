<script setup lang="ts">
import dayjs from 'dayjs';
import { SingleChatWrapper, MessageList, BackShadowEmoji, Footer } from '../style';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import { message } from 'ant-design-vue';
import { useRoute } from 'vue-router';
import EmojiPicker from '@/components/utilities/Emoji.vue';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import PropTypes from 'vue-types';

const props = defineProps({
  dashboard: PropTypes.bool,
});

const { state, dispatch } = useStore();
const { params } = useRoute();
const rtl = computed(() => state.ChangeLayoutMode.rtlData);
const chatData = computed(() => state.chat.privateChat.data);
const left = computed(() => (!rtl.value ? 'left' : 'right'));

const me = ref('woadud@gmail.com');

const singleContent = computed(() => (chatData.value[0] ? chatData.value[0].content : []));
const name = computed(() => chatData.value[0] && chatData.value[0].userName);

const inputValue = ref('');
const fileList = ref([]);
const fileList2 = ref([]);
const pickerShow = ref(false);

const setPickerShow = (value: any) => {
  pickerShow.value = value;
};

const onEmojiClick = (emojiObject: any) => {
  return (inputValue.value = inputValue.value + emojiObject);
};

const onPickerShow = () => {
  pickerShow.value = !pickerShow.value;
};

const handleChange = (e: any) => {
  inputValue.value = e.target.value;
};

const updatedContent = ref(singleContent.value);

const handleSubmit = (e: any) => {
  e.preventDefault();
  const pushcontent = {
    content: inputValue.value,
    time: new Date().getTime(),
    seen: false,
    reaction: false,
    email: me.value,
  };
  dispatch('updatePrivateChat', {
    id: params.id,
    pushcontent,
  });
  updatedContent.value = [...updatedContent.value, pushcontent];
  inputValue.value = '';
};

onMounted(() => dispatch('filterSinglePage', params.id || 'rofiq@gmail.com'));

const propsData = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  listType: 'picture-card',
  onChange(info: any) {
    if (info.file.status !== 'uploading') {
      fileList.value = info.fileList;
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const attachment = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info: any) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList);
      fileList2.value = info.fileList;
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
</script>

<template>
  <SingleChatWrapper :class="dashboard ? 'ninjadash-chat-home' : ''">
    <BackShadowEmoji v-if="pickerShow" @click="() => setPickerShow(false)" />
    <sdCards>
      <template #button>
        <sdDropdown key="1">
          <template #overlay>
            <router-link to="#">
              <unicon name="users-alt" width="14"></unicon>
              <span>Create new group</span>
            </router-link>
            <router-link to="#">
              <unicon name="trash-alt" width="14"></unicon>
              <span>Delete conversation</span>
            </router-link>
            <router-link to="#">
              <unicon name="ban" width="14"></unicon>
              <span>Block & Report</span>
            </router-link>
          </template>
          <a to="#">
            <unicon name="ellipsis-h"></unicon>
          </a>
        </sdDropdown>
      </template>
      <template #title>
        <sdHeading as="h5">{{ name }}</sdHeading>
        <p>Active Now</p>
      </template>

      <ul class="ninjadash-chatbox" v-if="singleContent.length">
        <perfect-scrollbar
          :options="{
            wheelSpeed: 1,
            swipeEasing: true,
            suppressScrollX: true,
          }"
        >
          <li
            v-for="({ time, img, email, content, id }, index) in singleContent"
            :key="time"
            class="ninjadash-chatbox__single"
          >
            <p v-if="index === 1" class="time-connector text-center text-capitalize">
              <span>today</span>
            </p>

            <div :key="id" :style="{ overflow: 'hidden' }">
              <div :class="email !== me ? 'left' : 'right'">
                <img v-if="email !== me" :src="`/src/assets/img/chat-author/${img}`" alt="" />

                <div class="ninjadash-chatbox__content">
                  <sdHeading as="h5" class="ninjadash-chatbox__name">
                    {{ email !== me ? name : null }}
                    <span>{{
                      dayjs(time).format('MM-DD-YYYY') === dayjs().format('MM-DD-YYYY')
                        ? dayjs(id).format('hh:mm A')
                        : dayjs(id).format('MMM D, YYYY')
                    }}</span>
                  </sdHeading>

                  <div v-if="email !== me" class="ninjadash-chatbox__contentInner d-flex">
                    <div class="ninjadash-chatbox__message">
                      <MessageList class="message-box">{{ content }}</MessageList>
                    </div>

                    <div class="ninjadash-chatbox__actions">
                      <sdDropdown :action="['hover']" placement="bottom">
                        <template #overlay>
                          <div class="ninjadash-chatbox__emoji">
                            <ul>
                              <li>
                                <router-link to="#">
                                  <span role="img">&#127773;</span>
                                </router-link>
                              </li>
                              <li>
                                <router-link to="#">
                                  <span role="img">&#128116;</span>
                                </router-link>
                              </li>
                              <li>
                                <router-link to="#">
                                  <span role="img">&#128127;</span>
                                </router-link>
                              </li>
                              <li>
                                <router-link to="#">
                                  <span role="img">&#128151;</span>
                                </router-link>
                              </li>
                              <li>
                                <router-link to="#">
                                  <span role="img">&#128400;</span>
                                </router-link>
                              </li>
                              <li>
                                <router-link to="#">
                                  <unicon name="ellipsis-h"></unicon>
                                </router-link>
                              </li>
                            </ul>
                          </div>
                        </template>
                        <router-link to="#">
                          <unicon name="smile"></unicon>
                        </router-link>
                      </sdDropdown>

                      <sdDropdown :action="['hover']" placement="bottom">
                        <template #overlay>
                          <div class="ninjadash-chatbox__messageControl">
                            <ul>
                              <li>
                                <router-link to="#">Copy</router-link>
                              </li>
                              <li>
                                <router-link to="#">Edit</router-link>
                              </li>
                              <li>
                                <router-link to="#">Quote</router-link>
                              </li>
                              <li>
                                <router-link to="#">Forward</router-link>
                              </li>
                              <li>
                                <router-link to="#">Remove</router-link>
                              </li>
                            </ul>
                          </div>
                        </template>
                        <router-link to="#">
                          <unicon name="ellipsis-h" width="18"></unicon>
                        </router-link>
                      </sdDropdown>
                    </div>
                  </div>

                  <div v-else class="ninjadash-chatbox__contentInner d-flex">
                    <div class="ninjadash-chatbox__actions">
                      <sdDropdown :action="['hover']" placement="bottom">
                        <template #overlay>
                          <div class="ninjadash-chatbox__messageControl">
                            <ul>
                              <li>
                                <router-link to="#">Edit </router-link>
                              </li>
                              <li>
                                <router-link to="#">Copy </router-link>
                              </li>
                              <li>
                                <router-link to="#">Quote</router-link>
                              </li>
                              <li>
                                <router-link to="#">Forward</router-link>
                              </li>
                              <li>
                                <router-link to="#">Remove</router-link>
                              </li>
                            </ul>
                          </div>
                        </template>
                        <router-link to="#">
                          <unicon name="ellipsis-h" width="18"></unicon>
                        </router-link>
                      </sdDropdown>
                      <sdDropdown :action="['hover']" placement="bottom">
                        <template #overlay>
                          <div class="ninjadash-chatbox__emoji">
                            <ul>
                              <li>
                                <router-link to="#">&#127773;</router-link>
                              </li>
                              <li>
                                <router-link to="#">&#128116;</router-link>
                              </li>
                              <li>
                                <router-link to="#">&#128127;</router-link>
                              </li>
                              <li>
                                <router-link to="#">&#128151;</router-link>
                              </li>
                              <li>
                                <router-link to="#">&#128400;</router-link>
                              </li>
                              <li>
                                <router-link to="#">
                                  <unicon name="ellipsis-h"></unicon>
                                </router-link>
                              </li>
                            </ul>
                          </div>
                        </template>
                        <router-link to="#">
                          <unicon name="smile"></unicon>
                        </router-link>
                      </sdDropdown>
                    </div>
                    <div class="ninjadash-chatbox__message">
                      <MessageList class="message-box">{{ content }}</MessageList>
                    </div>
                  </div>

                  <div v-if="email === me && singleContent.length === index + 1" class="message-seen text-right">
                    <span class="message-seen__time">Seen 9:20 PM </span>
                    <img :src="`/src/assets/img/chat-author/${img}`" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </perfect-scrollbar>
      </ul>
      <p v-else class="no-data-text">No data found</p>

      <Footer>
        <form @submit="handleSubmit">
          <div :class="`chatbox-reply-form d-flex ${fileList.length && 'hasImage'} ${fileList2.length && 'hasFile'}`">
            <div class="chatbox-reply-input">
              <span class="smile-icon">
                <EmojiPicker :emojiClick="onEmojiClick" v-if="pickerShow" />
                <router-link @click="onPickerShow" to="#">
                  <unicon name="smile" width="24"></unicon>
                </router-link>
              </span>
              <input
                @change="handleChange"
                placeholder="Type your message..."
                name="chat"
                id="chat"
                :style="{ width: '100%' }"
                :value="inputValue"
              />
            </div>
            <div class="chatbox-reply-action d-flex">
              <a to="#">
                <a-upload v-bind="propsData">
                  <unicon name="camera" width="18"></unicon>
                </a-upload>
              </a>
              <a to="#">
                <span class="ant-upload-picture-card-wrapper">
                  <div class="ant-upload-select">
                    <unicon name="paperclip" width="18"></unicon>
                  </div>
                </span>
              </a>
              <sdButton @click="handleSubmit" type="primary" class="btn-send">
                <unicon name="message" width="18"></unicon>
              </sdButton>
            </div>
          </div>
        </form>
      </Footer>
    </sdCards>
  </SingleChatWrapper>
</template>

<style scoped>
.ps {
  height: 450px;
}
</style>
