export default {
  teamDataBegin(state) {
    state.loading = true;
  },

  teamDataSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  teamDataErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
