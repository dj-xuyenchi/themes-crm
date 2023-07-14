export default {
  teamDataBegin(state: any) {
    state.loading = true;
  },

  teamDataSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  teamDataErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
