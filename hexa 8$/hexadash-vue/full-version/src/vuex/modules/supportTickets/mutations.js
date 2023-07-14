export default {
  ticketReadBegin(state) {
    state.loading = true;
  },

  ticketReadSuccess(state, data) {
    state.loading = false;
    state.data = data;
  },

  ticketReadErr(state, err) {
    state.loading = false;
    state.error = err;
  },
  
  filterSinglePageReadBegin(state) {
    state.loading = true;
  },

  filterSinglePageReadSuccess(state, data) {
    state.loading = false;
    state.ticket = data;
  },

  filterSinglePageReadErr(state, err) {
    state.loading = false;
    state.error = err;
  },
};
