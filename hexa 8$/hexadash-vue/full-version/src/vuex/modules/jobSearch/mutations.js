export default {
  jobsReadBegin(state) {
    state.loading = true;
  },

  jobsReadSuccess(state, data) {
    state.loading = false;
    state.jobs = data;
  },

  jobsReadErr(state, err) {
    state.loading = false;
    state.error = err;
  },
  filterSingleJobPageReadBegin(state) {
    state.loading = true;
  },

  filterSingleJobPageReadSuccess(state, data) {
    state.loading = false;
    state.job = data;
  },

  filterSingleJobPageReadErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  labelUpdateBegin(state) {
    state.loading = true;
  }
};
