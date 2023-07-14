export default {
  axiosAddBeginBegin(state) {
    state.loading = true;
  },

  axiosAddBeginSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  axiosAddBeginErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  axiosReadBegin(state) {
    state.loading = true;
  },

  axiosReadSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  axiosReadErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  axiosUpdateBegin(state) {
    state.loading = true;
  },

  axiosUpdateSuccess(state) {
    state.loading = false;
    // state.data = data;
  },

  axiosUpdateErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  axiosDeleteBegin(state) {
    state.loading = true;
  },

  axiosDeleteSuccess(state) {
    state.loading = false;
    // state.data = data;
  },

  axiosDeleteErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  axiosSingleDataBegin(state) {
    state.loading = true;
  },

  axiosSingleDataSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  axiosSingleDataErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  axiosUploadBegin(state) {
    state.fileLoading = true;
  },

  axiosUploadSuccess(state, data) {
    state.fileLoading = false;
    state.url = data;
    state.error = false;
  },

  axiosUploadErr(state, err) {
    state.fileLoading = false;
    state.error = err;
  },

  axiosSearchBegin(state) {
    state.loading = true;
  },

  axiosSearchSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  axiosSearchErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};