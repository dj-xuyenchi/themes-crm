export default {
  axiosAddBeginBegin(state: any) {
    state.loading = true;
  },

  axiosAddBeginSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  axiosAddBeginErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  axiosReadBegin(state: any) {
    state.loading = true;
  },

  axiosReadSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  axiosReadErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  axiosUpdateBegin(state: any) {
    state.loading = true;
  },

  axiosUpdateSuccess(state: any) {
    state.loading = false;
    // state.data = data;
  },

  axiosUpdateErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  axiosDeleteBegin(state: any) {
    state.loading = true;
  },

  axiosDeleteSuccess(state: any) {
    state.loading = false;
    // state.data = data;
  },

  axiosDeleteErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  axiosSingleDataBegin(state: any) {
    state.loading = true;
  },

  axiosSingleDataSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  axiosSingleDataErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  axiosUploadBegin(state: any) {
    state.fileLoading = true;
  },

  axiosUploadSuccess(state: any, data: any) {
    state.fileLoading = false;
    state.url = data;
    state.error = false;
  },

  axiosUploadErr(state: any, err: any) {
    state.fileLoading = false;
    state.error = err;
  },

  axiosSearchBegin(state: any) {
    state.loading = true;
  },

  axiosSearchSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  axiosSearchErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
