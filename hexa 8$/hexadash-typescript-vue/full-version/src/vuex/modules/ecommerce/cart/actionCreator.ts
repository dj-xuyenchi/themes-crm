import products from '@/demoData/cart.json';
import mutations from './mutations';

const state = () => ({
  data: null,
  loading: false,
  error: null,
});

const actions = {
  async cartGetData({ commit }: { commit: any }) {
    try {
      commit('cartDataBegin');
      commit('cartDataSuccess', products);
    } catch (err) {
      commit('cartDataErr', err);
    }
  },
  async cartUpdateQuantity({ commit }: { commit: any }, { id, quantity, cartData }: any) {
    try {
      commit('cartUpdateBegin');
      const data = cartData.map((item: any) => {
        if (item.id === id) item.quantity = quantity;
        return item;
      });
      commit('cartUpdateSuccess', data);
    } catch (err) {
      commit('cartUpdateErr', err);
    }
  },
  async cartDelete({ commit }: { commit: any }, { id, cartData }: any) {
    try {
      commit('cartDeleteBegin');
      const data = cartData.filter((item: any) => item.id != id);

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
