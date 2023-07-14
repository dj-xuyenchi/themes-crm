export default {
  singleChatBegin(state: any) {
    state.privateData.loading = true;
  },

  singleChatSuccess(state: any, data: any) {
    state.privateData.loading = false;
    state.privateData.data = data;
  },

  singleChatErr(state: any, err: any) {
    state.privateData.loading = false;
    state.privateData.error = err;
  },

  updatePrivateChatBegin(state: any) {
    state.privateData.loading = true;
  },

  updatePrivateChatSuccess(state: any, data: any) {
    state.privateData.loading = false;
    state.privateData.data = data;
  },

  updatePrivateChatErr(state: any, err: any) {
    state.privateChat.loading = false;
    state.privateChat.error = err;
  },
  singleGroupChatBegin(state: any) {
    state.groupData.loading = true;
  },

  singleGroupChatSuccess(state: any, data: any) {
    state.groupData.loading = false;
    state.groupData.data = data;
  },

  singleGroupChatErr(state: any, err: any) {
    state.groupData.loading = false;
    state.groupData.error = err;
  },

  updateGroupChatBegin(state: any) {
    state.groupChat.loading = true;
  },

  updateGroupChatSuccess(state: any, data: any) {
    state.groupChat.loading = false;
    state.groupChat.data = data;
  },

  updateGroupChatErr(state: any, err: any) {
    state.groupChat.loading = false;
    state.groupChat.error = err;
  },
};
