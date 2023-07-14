export default {
  filterOrderBegin(state: any) {
    state.loading = true;
  },
  filterOrderSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },
  filterOrderErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
