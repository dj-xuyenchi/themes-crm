<template>
  <BackShadowEmoji v-if="pickerShow" @click="onPickerShow" />
  <sdPageHeader
    title="Ticket Details"
    :routes="pageRoutes"
    class="ninjadash-page-header-main"
  ></sdPageHeader>

  <Main>
    <TicketDetailsBox>
      <a-row v-if="dataState.length" :gutter="15">
        <a-col :md="24">
          <a href="#" class="ninjadash-back-btn" @click="goBack"
            ><unicon name="arrow-left"></unicon>Go back</a
          >
        </a-col>
        <a-col :md="16">
          <div class="ninjadash-ticket-details">
            <sdCards headless :title="dataState[0].subject">
              <a-row>
                <a-col :lg="8" :md="12" :sm="24" :xs="24">
                  <div class="ninjadash-ticket-author">
                    <h4 class="ninjadash-ticket-details__top-title">
                      Requested By:
                    </h4>
                    <div class="ninjadash-ticket-author__info">
                      <img
                        :style="{ width: '30px' }"
                        :src="require(`@/${dataState[0].user.img}`)"
                        alt=""
                      />
                      <span class="ninjadash-ticket-author__name">{{
                        dataState[0].user.name
                      }}</span>
                    </div>
                    <h4>Priority</h4>
                    <a-select
                      @onChange="handleUpdatePriority"
                      :style="{ width: '200px' }"
                      :defaultValue="dataState[0].priority"
                    >
                      <a-select-option value="Low">Low</a-select-option>
                      <a-select-option value="Medium">Medium</a-select-option>
                      <a-select-option value="High">High</a-select-option>
                    </a-select>
                  </div>
                </a-col>
                <a-col :lg="8" :md="12" :sm="24" :xs="24">
                  <div class="ninjadash-ticket-date-info ticket-date-created">
                    <div class="ninjadash-ticket-date-info__text">
                      <h4 class="ninjadash-ticket-details__top-title">
                        Created Date
                      </h4>
                      <span>January 20, 2020</span>
                    </div>
                    <h4>Status</h4>
                    <a-select
                      @onChange="handleUpdateStatus"
                      :style="{ width: '200px' }"
                      :defaultValue="dataState[0].status"
                    >
                      <a-select-option value="close">Close</a-select-option>
                      <a-select-option value="open">Open</a-select-option>
                      <a-select-option value="pending">Pending</a-select-option>
                    </a-select>
                  </div>
                </a-col>
                <a-col :lg="8" :md="12" :sm="24" :xs="24">
                  <div class="ninjadash-ticket-date-info ticket-date-updated">
                    <div class="ninjadash-ticket-date-info__text">
                      <h4 class="ninjadash-ticket-details__top-title">
                        Updated Date
                      </h4>
                      <span>February 02, 2020</span>
                    </div>
                  </div>
                </a-col>
              </a-row>
              <div class="ninjadash-ticket-overview">
                <h4 class="ninjadash-ticket-overview__title">Overview :</h4>
                <p>{{ dataState[0].description }}</p>
              </div>
            </sdCards>
          </div>
          <ClientConversation>
            <sdCards headless title="Conversation">
              <a-list
                :data-source="dataState[0].user.conversations"
                class="ninjadash-client-conversation-list"
              >
                <template #renderItem="{ item }">
                  <a-list-item>
                    <a-list-item-meta
                      class="ninjadash-status-online"
                      :description="item.chat"
                    >
                      <template #title>
                        <a href="#">{{ item.name }}</a>
                      </template>
                      <template #avatar>
                        <a-avatar
                          shape="square"
                          :src="require(`@/${item.img}`)"
                        />
                      </template>
                    </a-list-item-meta>
                    <span class="ninjadash-conversation-time">{{
                      item.time
                    }}</span>
                  </a-list-item>
                </template>
              </a-list>
              <div class="chatbox-reply-form-wrap">
                <form @Submit="handleSubmit">
                  <div class="chatbox-reply-form d-flex">
                    <div class="chatbox-reply-input">
                      <span class="smile-icon">
                        <!-- {pickerShow && <Picker onEmojiClick="{onEmojiClick}" />} -->

                        <EmojiPicker
                          :emojiClick="onEmojiClick"
                          v-if="pickerShow"
                        />

                        <a @click="onPickerShow" href="#">
                          <unicon name="smile" width="24"></unicon>
                        </a>
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
                      <sdButton
                        @click="handleSubmit"
                        type="primary"
                        class="btn-send"
                      >
                        <unicon name="message" width="18"></unicon>
                      </sdButton>
                    </div>
                  </div>
                </form>
              </div>
            </sdCards>
          </ClientConversation>
        </a-col>
        <a-col :md="8">
          <div class="ninjadash-ticket-file-system">
            <sdCards title="File Attachment">
              <div class="ninjadash-ticket-file-list">
                <div class="ninjadash-ticket-file-item d-flex">
                  <div class="ninjadash-ticket-file-item__info d-flex">
                    <div class="ninjadash-ticket-file-item__logo">
                      <img
                        :style="{ width: '40px' }"
                        src="@/static/img/files/zip.png"
                        alt="File Logo"
                      />
                    </div>
                    <div class="ninjadash-file-item__content">
                      <span class="ninjadash-ticket-file-name"
                        >Main-admin-design.zip</span
                      >
                      <span class="ninjadash-ticket-file-size">7.05 MB</span>
                    </div>
                  </div>
                  <div class="ninjadash-ticket-file-item__action">
                    <unicon name="import"></unicon>
                  </div>
                </div>

                <div class="ninjadash-ticket-file-item d-flex">
                  <div class="ninjadash-ticket-file-item__info d-flex">
                    <div class="ninjadash-ticket-file-item__logo">
                      <img
                        :style="{ width: '40px' }"
                        src="@/static/img/files/pdf.png"
                        alt="File Logo"
                      />
                    </div>
                    <div class="ninjadash-file-item__content">
                      <span class="ninjadash-ticket-file-name"
                        >Product-guidelines.pdf</span
                      >
                      <span class="ninjadash-ticket-file-size">522 KB</span>
                    </div>
                  </div>
                  <div class="ninjadash-ticket-file-item__action">
                    <unicon name="import"></unicon>
                  </div>
                </div>

                <div class="ninjadash-ticket-file-item d-flex">
                  <div class="ninjadash-ticket-file-item__info d-flex">
                    <div class="ninjadash-ticket-file-item__logo">
                      <img
                        :style="{ width: '40px' }"
                        src="@/static/img/files/psd.png"
                        alt="File Logo"
                      />
                    </div>
                    <div class="ninjadash-file-item__content">
                      <span class="ninjadash-ticket-file-name"
                        >admin-wireframe.psd</span
                      >
                      <span class="ninjadash-ticket-file-size">2.05 MB</span>
                    </div>
                  </div>
                  <div class="ninjadash-ticket-file-item__action">
                    <unicon name="import"></unicon>
                  </div>
                </div>
              </div>
            </sdCards>
          </div>
        </a-col>
      </a-row>

      <sdCards v-else headless>
        <a-spin />
      </sdCards>
    </TicketDetailsBox>
  </Main>
</template>
<script>
import { Main } from "../../styled";
import { BackShadowEmoji, TicketDetailsBox, ClientConversation } from "./Style";
import { useStore } from "vuex";
import { defineComponent, onMounted, computed, ref } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import EmojiPicker from "@/components/utilities/Emoji.vue";
import { idGenerator } from "../../../utility/utility";
import { useRoute, useRouter } from "vue-router";

const pageRoutes = [
  {
    path: "index",
    breadcrumbName: "Dashboard",
  },
  {
    path: "app",
    breadcrumbName: "Apps",
  },
  {
    path: "first",
    breadcrumbName: "Tickets",
  },
];

const prefix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const SupportTicket = defineComponent({
  name: "SupportTicket",
  components: {
    Main,
    EmojiPicker,
    BackShadowEmoji,
    TicketDetailsBox,
    ClientConversation,
  },
  setup() {
    const { state, dispatch } = useStore();
    const { params } = useRoute();
    const router = useRouter();
    const inputValue = ref("");
    const pickerShow = ref(false);

    const dataState = computed(() => state.tickets.ticket);
    const allTickets = computed(() => state.tickets.data);

    onMounted(() => {
      dispatch("singlePageReade", params.id);
      dispatch("ticketReadData");
    });

    const onPickerShow = (e) => {
      e.preventDefault();
      pickerShow.value = !pickerShow.value;
    };

    const handleChange = (e) => {
      inputValue.value = inputValue.value + e.target.value;
    };

    const handleIdSearch = (e) => {
      const value = e.currentTarget.value;

      dispatch("ticketUpdateSearch", {
        value,
        key: "id",
      });
    };

    const handleStatusSearch = (value) => {
      dispatch("ticketUpdateSearch", {
        value,
        key: "status",
      });
    };

    const handleSubjectSearch = (e) => {
      const { value } = e.currentTarget;
      dispatch("ticketUpdateSearch", {
        value,
        key: "subject",
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const { conversations } = dataState.value[0].user;
      const id = idGenerator(conversations, 1);
      conversations.push({
        id,
        name: "Daniel Pink",
        chat: inputValue.value,
        img: "static/img/users/2.png",
        time: "Just Now",
      });

      const newData = allTickets.value.map((item) => {
        if (item.id === params.id) {
          const newItem = { ...item };
          newItem.user.conversations = conversations;
          return newItem;
        }
        return item;
      });

      dispatch("ticketUpdateData", newData);
      dispatch("singlePageReade", params.id);
      inputValue.value = "";
    };

    const handleUpdateStatus = (values) => {
      const newData = allTickets.value.map((item) => {
        if (item.id === params.id) {
          const newItem = { ...item };
          newItem.status = values;
          return newItem;
        }
        return item;
      });

      dispatch("ticketUpdateData", newData);
      dispatch("singlePageReade", params.id);
    };

    const handleUpdatePriority = (values) => {
      const newData = allTickets.value.map((item) => {
        if (item.id === params.id) {
          const newItem = { ...item };
          newItem.priority = values;
          return newItem;
        }
        return item;
      });

      dispatch("ticketUpdateData", newData);
      dispatch("singlePageReade", params.id);
    };

    const onEmojiClick = (emojiObject) => {
      console.log(emojiObject);
      inputValue.value = inputValue.value + emojiObject;
    };
    const goBack = (e) => {
      e.preventDefault();
      router.go(-1);
    };
    return {
      goBack,
      pageRoutes,
      prefix,
      allTickets,
      handleIdSearch,
      handleStatusSearch,
      handleSubjectSearch,
      handleSubmit,
      handleUpdateStatus,
      dataState,
      handleUpdatePriority,
      onPickerShow,
      pickerShow,
      inputValue,
      onEmojiClick,
      handleChange,
    };
  },
});

export default SupportTicket;
</script>
