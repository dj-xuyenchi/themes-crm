export default {
  firebaseLoginBegin(state) {
    state.loading = true;
  },

  firebaseLoginSuccess(state, uid) {
    state.loading = false;
    state.isLogin = true;
    state.uid = uid;
  },

  firebaseLoginErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  firebaseLogOutBegin(state) {
    state.loading = true;
  },

  firebaseLogOutSuccess(state) {
    state.loading = false;
    state.isLogout = true;
    state.isLogin = false;
  },

  firebaseLogOutErr(state, err) {
    state.loading = false;
    state.error = err;
  },
  firebaseSignUpBegin(state) {
    state.loading = true;
  },

  firebaseSignUpSuccess(state, uid) {
    state.loading = false;
    state.isLogin = true;
    state.uid = uid;
  },

  firebaseSignUpErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
