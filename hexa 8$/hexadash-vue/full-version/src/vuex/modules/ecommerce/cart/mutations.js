export default {
  cartDataBegin(state) {
    state.loading = true;
  },
  cartDataSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },
  cartDataErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  cartUpdateBegin(state) {
    state.loading = true;
  },
  cartUpdateSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },
  cartUpdateErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  cartDeleteBegin(state) {
    state.loading = true;
  },
  cartDeleteSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },
  cartDeleteErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
