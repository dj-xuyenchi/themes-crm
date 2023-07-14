import staticData from '../../demoData/gallery.json';

const state = () => ({
  data: staticData,
  isLoading: false,
  error: null,
});

const mutations = {
  filterGalleryBegin(state: any) {
    state.isLoading = true;
  },
  filterGallerySuccess(state: any, data: any) {
    state.isLoading = false;
    state.data = data;
  },
  filterGalleryErr(state: any, err: any) {
    state.isLoading = false;
    state.error = err;
  },
};

const actions = {
  async galleryFilter({ commit }: { commit: any }, { column, value }: any) {
    try {
      commit('filterGalleryBegin');
      setTimeout(() => {
        const data = staticData.filter((item: any) => {
          if (value !== '') {
            return item[column] === value;
          }
          return item;
        });
        commit('filterGallerySuccess', data);
      }, 500);
    } catch (err) {
      commit('filterGalleryErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
