export default {
  calendarReadBegin(state) {
    state.loading = true;
  },

  calendarReadSuccess(state, data) {
    state.loading = false;
    state.events = data;
  },

  calendarReadErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  eventVisibleBegin(state) {
    state.loading = true;
  },

  eventVisibleSuccess(state, data) {
    state.loading = false;
    state.eventVisible = data;
  },

  eventVisibleErr(state, err) {
    state.loading = false;
    state.error = err;
  },

  starUpdateBegin(state) {
    state.sLoading = true;
  },

  starUpdateSuccess(state, data) {
    state.sLoading = false;
    state.events = data;
  },

  starUpdateErr(state, err) {
    state.sLoading = false;
    state.error = err;
  },

  labelUpdateBegin(state) {
    state.sLoading = true;
  },

  labelUpdateSuccess(state, data) {
    state.sLoading = false;
    state.events = data;
  },

  labelUpdateErr(state, err) {
    state.sLoading = false;
    state.error = err;
  },
};
