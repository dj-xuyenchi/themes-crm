export default {
  jobsReadBegin(state: any) {
    state.loading = true;
  },

  jobsReadSuccess(state: any, data: any) {
    state.loading = false;
    state.jobs = data;
  },

  jobsReadErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
  filterSingleJobPageReadBegin(state: any) {
    state.loading = true;
  },

  filterSingleJobPageReadSuccess(state: any, data: any) {
    state.loading = false;
    state.job = data;
  },

  filterSingleJobPageReadErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  labelUpdateBegin(state: any) {
    state.loading = true;
  },
};
