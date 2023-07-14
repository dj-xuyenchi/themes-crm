import products from '@/demoData/cart.json';
import mutations from './mutations';

const state = () => ({
  data: null,
  loading: false,
  error: null,
});

const actions = {
  async cartGetData({ commit }) {
    try {
      commit('cartDataBegin');
      commit('cartDataSuccess', products);
    } catch (err) {
      commit('cartDataErr', err);
    }
  },
  async cartUpdateQuantity({ commit }, { id, quantity, cartData }) {
    try {
      commit('cartUpdateBegin');
      const data = cartData.map((item) => {
        if (item.id === id) item.quantity = quantity;
        return item;
      });
      commit('cartUpdateSuccess', data);
    } catch (err) {
      commit('cartUpdateErr', err);
    }
  },
  async cartDelete({ commit }, { id, cartData }) {
    try {
      commit('cartDeleteBegin');
      const data = cartData.filter((item) => item.id != id);

      commit('cartDeleteSuccess', data);
    } catch (err) {
      commit('cartDeleteErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
