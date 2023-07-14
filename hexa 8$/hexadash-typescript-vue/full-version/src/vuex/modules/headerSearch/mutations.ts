export default {
  searchHeaderSuccess(state: any, data: any) {
    state.data = data;
  },

  searchHeaderErr(state: any, err: any) {
    state = err;
  },
};
