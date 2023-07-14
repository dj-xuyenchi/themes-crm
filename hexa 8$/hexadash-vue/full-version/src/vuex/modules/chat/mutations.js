export default {
  singleChatBegin(state) {
    state.privetData.loading = true;
  },

  singleChatSuccess(state, data) {
    state.privetData.loading = false;
    state.privetData.data = data;
  },

  singleChatErr(state, err) {
    state.privetData.loading = false;
    state.privetData.error = err;
  },

  updatePrivetChatBegin(state) {
    state.privetData.loading = true;
  },

  updatePrivetChatSuccess(state, data) {
    state.privetData.loading = false;
    state.privetData.data = data;
  },

  updatePrivetChatErr(state, err) {
    state.privetChat.loading = false;
    state.privetChat.error = err;
  },
  singleGroupChatBegin(state) {
    state.groupData.loading = true;
  },

  singleGroupChatSuccess(state, data) {
    state.groupData.loading = false;
    state.groupData.data = data;
  },

  singleGroupChatErr(state, err) {
    state.groupData.loading = false;
    state.groupData.error = err;
  },

  updateGroupChatBegin(state) {
    state.groupChat.loading = true;
  },

  updateGroupChatSuccess(state, data) {
    state.groupChat.loading = false;
    state.groupChat.data = data;
  },

  updateGroupChatErr(state, err) {
    state.groupChat.loading = false;
    state.groupChat.error = err;
  },
};
