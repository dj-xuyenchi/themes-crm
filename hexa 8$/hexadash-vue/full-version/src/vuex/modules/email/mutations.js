export default {
  singleEmailBegin(state) {
    state.loading = true;
  },

  singleEmailSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  singleEmailErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  starUpdateBegin(state) {
    state.sLoading = true;
  },

  starUpdateSuccess(state, data) {
    state.sLoading = false;
    state.allMessage = data;
  },

  starUpdateErr(state, err) {
    state.sLoading = false;
    state.error = err;
  },
};
