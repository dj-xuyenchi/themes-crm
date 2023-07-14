export default {
  readBegin(state) {
    state.loading = true;
  },

  readSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  readErr(state, err) {
    state.loading = false;
    state.error = err;
  },
  starUpdateBegin(state) {
    state.loading = true;
  },

  starUpdateSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  starUpdateErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
