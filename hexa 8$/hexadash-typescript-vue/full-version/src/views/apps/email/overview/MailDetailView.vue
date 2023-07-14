<script setup lang="ts">
import dayjs from 'dayjs';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { MailDetailsWrapper, MessageAction, MessageDetails, ReplyList, MessageReply, MailRightAction } from './style';
// const MailComposer = lazy(() => import('./MailComposer'));
import { useRouter, useRoute } from 'vue-router';

const { state, dispatch } = useStore();
const { back } = useRouter();
const { params }: any = useRoute();
const email = computed(() => state.email.data[0]);
const replyMessage = ref(0);

onMounted(() => {
  dispatch('filterSinglePage', parseInt(params.id));
});

const replyMail = (message: any) => {
  replyMessage.value = message;
};

const onStaredChange = (id: number) => {
  dispatch('onStarUpdate', id);
  dispatch('filterSinglePage', parseInt(params.id));
};
</script>

<template>
  <MailDetailsWrapper v-if="email">
    <sdCards>
      <template #button>
        <MailRightAction>
          <span>1 - 50 of 235</span>
        </MailRightAction>
      </template>
      <template #title>
        <MessageAction>
          <router-link @click="() => back()" to="#">
            <unicon name="arrow-left" width="14"></unicon>
          </router-link>
          <a-tooltip placement="bottom" title="Refresh">
            <router-link to="#">
              <unicon name="redo" width="18"></unicon>
            </router-link>
          </a-tooltip>
          <a-tooltip placement="bottom" title="Archive">
            <router-link to="#">
              <unicon name="archive" width="18"></unicon>
            </router-link>
          </a-tooltip>
          <a-tooltip placement="bottom" title="Info">
            <router-link to="#">
              <unicon name="exclamation-octagon" width="18"></unicon>
            </router-link>
          </a-tooltip>
          <a-tooltip placement="bottom" title="Delete">
            <router-link to="#">
              <unicon name="trash-alt" width="18"></unicon>
            </router-link>
          </a-tooltip>
          <a-tooltip placement="bottom" title="Read">
            <router-link to="#">
              <unicon name="book-open" width="18"></unicon>
            </router-link>
          </a-tooltip>
          <a-tooltip placement="bottom" title="Folder">
            <router-link to="#">
              <unicon name="folder" width="18"></unicon>
            </router-link>
          </a-tooltip>
        </MessageAction>
      </template>
      <a-row :gutter="15">
        <a-col>
          <MessageDetails>
            <div class="d-flex justify-content-between align-items-center">
              <div class="message-subject">
                <sdHeading as="h2">
                  {{ email.subject }}
                  <span class="mail-badge primary">{{ email.type }}</span>
                </sdHeading>
              </div>

              <div class="message-action">
                <router-link to="#" class="ex-coll">
                  <unicon name="angle-up" width="18"></unicon>
                  <unicon name="angle-down" width="18"></unicon>
                </router-link>

                <router-link to="#">
                  <unicon name="print" width="18"></unicon>
                </router-link>
              </div>
            </div>

            <div class="message-box d-flex justify-content-between align-items-center">
              <div class="message-author">
                <img
                  :style="{ width: '60px', borderRadius: '50%' }"
                  :src="`/src/assets/img/chat-author/${email.img}`"
                  alt=""
                />
                <div>
                  <sdHeading as="h4">{{ email.userName }}</sdHeading>
                  <sdDropdown placement="bottom">
                    <template #overlay>
                      <ul class="mail-props">
                        <li>
                          <span>From:</span> <span>{{ email.from }}</span>
                        </li>
                        <li>
                          <span>To:</span> <span>{{ email.to }}</span>
                        </li>
                        <li><span>CC:</span> <span>example@gamil.com</span></li>
                        <li>
                          <span>Date:</span>
                          <span>{{ dayjs(email.id).format('MMM D, YYYY') }}</span>
                        </li>
                      </ul>
                    </template>
                    <router-link to="#">
                      To {{ email.to }}
                      <unicon name="angle-down" width="18"></unicon>
                    </router-link>
                  </sdDropdown>
                </div>
              </div>

              <div class="message-excerpt">
                <span>
                  <unicon name="paperclip"></unicon>
                </span>
                <span> {{ dayjs(email.id).format('MMM D, YYYY') }} </span>
                <router-link
                  :class="email.stared ? 'starActive' : 'starDeactivate'"
                  @click="() => onStaredChange(email.id)"
                  to="#"
                >
                  <unicon name="star" width="18"></unicon>
                </router-link>
                <router-link to="#">
                  <unicon name="corner-up-left"></unicon>
                </router-link>
                <router-link to="#">
                  <unicon name="ellipsis-v"></unicon>
                </router-link>
              </div>
            </div>

            <div class="message-body">
              <span class="welcome-text">Hello Adam,</span>
              <p>{{ email.body }}</p>

              <sdHeading as="h6">
                Best Regards <br />
                {{ email.userName }}
              </sdHeading>
            </div>

            <div class="message-attachments">
              <figure>
                <div class="attachment-image">
                  <img :src="'/src/assets/img/email/2.png'" alt="" />
                </div>
                <div class="attachment-hover">
                  <router-link class="btn-link" to="#">
                    <unicon name="import"></unicon>
                  </router-link>
                  <router-link class="btn-link" to="#">
                    <unicon name="share-alt"></unicon>
                  </router-link>
                </div>
                <figcaption>
                  <sdHeading as="h4">Attached.jpg</sdHeading>
                  <p>256.5 KB</p>
                </figcaption>
              </figure>

              <figure>
                <div class="attachment-image">
                  <img :src="'/src/assets/img/email/1.png'" alt="" />
                </div>
                <div class="attachment-hover">
                  <router-link class="btn-link" to="#">
                    <unicon name="import"></unicon>
                  </router-link>
                  <router-link class="btn-link" to="#">
                    <unicon name="share-alt"></unicon>
                  </router-link>
                </div>
                <figcaption>
                  <sdHeading as="h4">Attached.jpg</sdHeading>
                  <p>256.5 KB</p>
                </figcaption>
              </figure>
              <figure>
                <div class="attachment-image">
                  <img :src="'/src/assets/img/email/3.png'" alt="" />
                </div>
                <div class="attachment-hover">
                  <router-link class="btn-link" to="#">
                    <unicon name="import"></unicon>
                  </router-link>
                  <router-link class="btn-link" to="#">
                    <unicon name="share-alt"></unicon>
                  </router-link>
                </div>
                <figcaption>
                  <sdHeading as="h4">Attached.zip</sdHeading>
                  <p>256.5 KB</p>
                </figcaption>
              </figure>
              <figure>
                <div class="attachment-image">
                  <img :src="'/src/assets/img/email/4.png'" alt="" />
                </div>
                <div class="attachment-hover">
                  <router-link class="btn-link" to="#">
                    <unicon name="import"></unicon>
                  </router-link>
                  <router-link class="btn-link" to="#">
                    <unicon name="share-alt"></unicon>
                  </router-link>
                </div>
                <figcaption>
                  <sdHeading as="h4">Attached.pdf</sdHeading>
                  <p>256.5 KB</p>
                </figcaption>
              </figure>
            </div>
            <hr />
          </MessageDetails>
        </a-col>
      </a-row>

      <a-row :gutter="15">
        <a-col :xs="24">
          <ReplyList>
            <div class="reply-view__single">
              <figure class="reply-view__content d-flex">
                <img :style="{ width: '50px', height: '50px' }" :src="'/src/assets/img/email/2.png'" alt="" />
                <figcaption>
                  <sdHeading as="h6">Reynante Labares</sdHeading>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor inviduntLorem
                    ipsum dolor...
                  </p>
                </figcaption>
              </figure>
              <div class="reply-view__meta">
                <span class="meta-list">
                  <span class="date-meta">Jan 2, 2021, 5:22 PM</span>
                  <router-link
                    :class="email.stared ? 'starActive' : 'starDeactivate'"
                    @click="() => onStaredChange(email.id)"
                    to="#"
                  >
                    <unicon name="star" width="18"></unicon>
                  </router-link>
                  <router-link to="#">
                    <unicon name="ellipsis-v"></unicon>
                  </router-link>
                  <router-link to="#">
                    <unicon name="corner-up-left"></unicon>
                  </router-link>
                </span>
              </div>
            </div>
          </ReplyList>
          <MessageReply>
            <nav>
              <ul>
                <li>
                  <router-link :to="`/app/mail-single/${params.id}/replay`" class="reply-link">
                    <unicon name="corner-up-left" width="14"></unicon> Reply
                  </router-link>
                </li>
                <li>
                  <router-link :to="`/app/mail-single/${params.id}/forward`" class="reply-link">
                    <unicon name="corner-up-right" width="14"></unicon> Forward
                  </router-link>
                </li>
              </ul>
            </nav>
            <div class="reply-form d-flex">
              <div class="reply-box">
                <router-view name="child" defaultTag="Alice Freeman" replay :onSend="replyMail"></router-view>
              </div>
            </div>
          </MessageReply>
        </a-col>
      </a-row>
    </sdCards>
  </MailDetailsWrapper>
  <div v-else class="spin">
    <a-spin />
  </div>
</template>
