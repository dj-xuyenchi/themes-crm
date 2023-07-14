import staticData from '../../../../demoData/products.json';
import mutations from './mutations';

const state = () => ({
  isProductLoading: false,
  products: staticData,
  product: staticData,
  isLoading: false,
  error: null,
});

const actions = {
  async filterSinglePage({ commit }, { paramsId, currentState }) {
    try {
      commit('singleProductBegin');
      const data = currentState.filter((product) => {
        return product.id === paramsId;
      });
      commit('singleProductSuccess', data);
    } catch (err) {
      commit('singleProductErr', err);
    }
  },

  async sorting({ commit }, sortBy) {
    try {
      commit('sortingProductBegin');
      setTimeout(() => {
        const data = staticData.sort((a, b) => {
          return b[sortBy] - a[sortBy];
        });
        commit('sortingProductSuccess', data);
      }, 100);
    } catch (err) {
      commit('sortingProductErr', err);
    }
  },

  async filterByPriceRange({ commit }, range) {
    commit('filterProductBegin');
    try {
      const data = staticData.filter((product) => {
        return product.price >= range[0] && product.price <= range[1];
      });
      commit('filterProductSuccess', data);
    } catch (err) {
      commit('filterProductErr', err);
    }
  },

  async filterByRating({ commit }, range) {
    try {
      commit('filterProductBegin');
      setTimeout(() => {
        const data = staticData.filter((product) => {
          if (range[0].length) {
            return range[0].includes(product.rate);
          }
          return staticData;
        });
        commit('filterProductSuccess', data);
      }, 100);
    } catch (err) {
      commit('filterProductErr', err);
    }
  },

  async filterByBrand({ commit }, brand) {
    try {
      commit('filterProductBegin');
      setTimeout(() => {
        const data = staticData.filter((product) => {
          if (brand[0].length) {
            return brand[0].includes(product.brand);
          }
          return staticData;
        });
        commit('filterProductSuccess', data);
      }, 100);
    } catch (err) {
      commit('filterProductErr', err);
    }
  },

  async filterByCategory({ commit }, category) {
    try {
      commit('filterProductBegin');
      setTimeout(() => {
        const data = staticData.filter((product) => {
          if (category !== 'all') {
            return product.category === category;
          }
          return staticData;
        });
        commit('filterProductSuccess', data);
      }, 100);
    } catch (err) {
      commit('filterProductErr', err);
    }
  },

  async updateWishList({ commit }, id) {
    
    try {
      commit('filterProductBegin');

      staticData.map((product) => {
        if (product.id === id) {
          return product.popular ? (product.popular = false) : (product.popular = true);
        }
        return commit('filterProductSuccess', staticData);
      });
    } catch (err) {
      commit('filterProductErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
