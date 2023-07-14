export default {
  singleProjectBegin(state: any) {
    state.loading = true;
  },

  singleProjectSuccess(state: any, data: any) {
    state.loading = false;
    state.singleData = data;
  },

  singleProjectErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  filterProjectBegin(state: any) {
    state.loading = true;
  },

  filterProjectSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  filterProjectErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  sortingProjectBegin(state: any) {
    state.loading = true;
  },

  sortingProjectSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
  },

  sortingProjectErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
