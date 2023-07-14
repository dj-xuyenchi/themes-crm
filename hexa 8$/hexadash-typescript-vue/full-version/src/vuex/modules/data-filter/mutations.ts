export default {
  dataTableReadBegin(state: any) {
    state.loading = true;
  },

  dataTableReadSuccess(state: any, data: any) {
    state.loading = false;
    state.tableData = data;
  },

  dataTableReadErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
  filterWithSubmitBegin(state: any) {
    state.loading = true;
  },

  filterWithSubmitSuccess(state: any, data: any) {
    state.loading = false;
    state.tableData = data;
  },

  filterWithSubmitErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  dataLiveFilterBegin(state: any) {
    state.loading = true;
  },

  dataLiveFilterSuccess(state: any, data: any) {
    state.loading = false;
    state.tableData = data;
  },

  dataLiveFilterErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
