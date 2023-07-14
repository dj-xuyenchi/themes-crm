export default {
  taskReadBegin(state) {
    state.loading = true;
  },

  taskReadSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  taskReadErr(state, err) {
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

  completeUpdateBegin(state) {
    state.loading = true;
  },

  completeUpdateSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  completeUpdateErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
