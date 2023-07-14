export default {
  fireStoreAddBeginBegin(state) {
    state.loading = true;
  },

  fireStoreAddBeginSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  fireStoreAddBeginErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  fireStoreReadBegin(state) {
    state.loading = true;
  },

  fireStoreReadSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  fireStoreReadErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  fireStoreUpdateBegin(state) {
    state.loading = true;
  },

  fireStoreUpdateSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  fireStoreUpdateErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  fireStoreDeleteBegin(state) {
    state.loading = true;
  },

  fireStoreDeleteSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  fireStoreDeleteErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  fireStoreSingleDataBegin(state) {
    state.loading = true;
  },

  fireStoreSingleDataSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  fireStoreSingleDataErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  fireStoreUploadBegin(state) {
    state.fileLoading = true;
  },

  fireStoreUploadSuccess(state, data) {
    state.fileLoading = false;
    state.url = data;
    state.error = false;
  },

  fireStoreUploadErr(state, err) {
    state.fileLoading = false;
    state.error = err;
  },

  fireStoreSearchBegin(state) {
    state.loading = true;
  },

  fireStoreSearchSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  fireStoreSearchErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
