export default {
  taskReadBegin(state: any) {
    state.loading = true;
  },

  taskReadSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  taskReadErr(state: any, err: any) {
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

  completeUpdateBegin(state: any) {
    state.loading = true;
  },

  completeUpdateSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  completeUpdateErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
