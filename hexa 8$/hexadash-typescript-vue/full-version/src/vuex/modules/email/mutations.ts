export default {
  singleEmailBegin(state: any) {
    state.loading = true;
  },

  singleEmailSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  singleEmailErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  starUpdateBegin(state: any) {
    state.sLoading = true;
  },

  starUpdateSuccess(state: any, data: any) {
    state.sLoading = false;
    state.allMessage = data;
  },

  starUpdateErr(state: any, err: any) {
    state.sLoading = false;
    state.error = err;
  },
};
