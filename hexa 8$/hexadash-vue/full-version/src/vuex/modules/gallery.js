import staticData from '../../demoData/gallery.json';

const state = () => ({
  data: staticData,
  isLoading: false,
  error: null,
});

const mutations = {
  filterGalleryBegin(state) {
    state.isLoading = true;
  },
  filterGallerySuccess(state, data) {
    state.isLoading = false;
    state.data = data;
  },
  filterGalleryErr(state, err) {
    state.isLoading = false;
    state.error = err;
  },
};

const actions = {
  async galleryFilter({ commit }, { column, value }) {
    try {
      commit('filterGalleryBegin');
      setTimeout(() => {
        const data = staticData.filter((item) => {
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
