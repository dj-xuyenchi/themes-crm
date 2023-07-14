export default {
  loginBegin(state: any) {
    state.login = true;
  },
  loginSuccess(state: any, data: any) {
    state.loading = false;
    state.login = data;
  },

  loginErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  logoutBegin(state: any) {
    state.loading = true;
  },

  logoutSuccess(state: any, data: any) {
    state.loading = false;
    state.login = data;
  },

  logoutErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
