export default {
  readBegin(state: any) {
    state.loading = true;
  },

  readSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  readErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
  starUpdateBegin(state: any) {
    state.loading = true;
  },

  starUpdateSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  starUpdateErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
