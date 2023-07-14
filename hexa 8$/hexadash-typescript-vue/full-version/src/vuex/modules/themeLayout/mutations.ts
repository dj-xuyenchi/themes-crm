export default {
  changeLayoutBegin(state: any) {
    state.loading = true;
  },

  changeLayoutSuccess(state: any, data: any) {
    state.loading = false;
    state.data = data;
    state.main = data ? 'blackMode' : 'lightMode';
  },

  changeLayoutErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  changeRtlBegin(state: any) {
    state.loading = true;
  },

  changeRtlSuccess(state: any, data: any) {
    state.loading = false;
    state.rtlData = data;
  },

  changeRtlErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },

  changeMenuBegin(state: any) {
    state.loading = true;
  },

  changeMenuSuccess(state: any, data: any) {
    state.loading = false;
    state.topMenu = data;
  },

  changeMenuErr(state: any, err: any) {
    state.loading = false;
    state.error = err;
  },
};
