export default {
  searchHeaderSuccess(state, data) {
    state.data = data;
  },

  searchHeaderErr(state, err) {
    state = err;
  },
};
