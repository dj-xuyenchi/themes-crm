export default {
  profileFriendsBegin(state) {
    state.isLoading = true;
  },

  profileFriendsSuccess(state, data) {
    state.isLoading = false;
    state.friends = data;
  },

  profileFriendsErr(state, err) {
    state.isLoading = false;
    state.error = err;
  },

  postDataBegin(state) {
    state.postLoading = true;
  },

  postDataSuccess(state, data) {
    state.postLoading = false;
    state.posts = data;
  },

  postDataErr(state, err) {
    state.postLoading = false;
    state.error = err;
  },
};
