export default {
  profileFriendsBegin(state: any) {
    state.isLoading = true;
  },

  profileFriendsSuccess(state: any, data: any) {
    state.isLoading = false;
    state.friends = data;
  },

  profileFriendsErr(state: any, err: any) {
    state.isLoading = false;
    state.error = err;
  },

  postDataBegin(state: any) {
    state.postLoading = true;
  },

  postDataSuccess(state: any, data: any) {
    state.postLoading = false;
    state.posts = data;
  },

  postDataErr(state: any, err: any) {
    state.postLoading = false;
    state.error = err;
  },
};
