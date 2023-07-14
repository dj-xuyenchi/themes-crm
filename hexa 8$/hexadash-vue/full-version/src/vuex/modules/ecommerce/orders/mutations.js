export default {
  filterOrderBegin(state) {
    state.loading = true;
  },
  filterOrderSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },
  filterOrderErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
