export default {
  cartDataBegin(state: any) {
    state.loading = true;
  },
  cartDataSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },
  cartDataErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  cartUpdateBegin(state: any) {
    state.loading = true;
  },
  cartUpdateSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },
  cartUpdateErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  cartDeleteBegin(state: any) {
    state.loading = true;
  },
  cartDeleteSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },
  cartDeleteErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
