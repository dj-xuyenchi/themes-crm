export default {
  todoReadBegin(state) {
    state.loading = true;
  },

  todoReadSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  todoReadErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  todoStarUpdateBegin(state) {
    state.loading = true;
  },

  todoStarUpdateSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  todoStarUpdateErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
