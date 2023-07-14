export default {
  noteReadBegin(state) {
    state.loading = true;
  },

  noteReadSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  noteReadErr(state, err) {
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

  labelUpdateBegin(state) {
    state.loading = true;
  },

  labelUpdateSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  labelUpdateErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
