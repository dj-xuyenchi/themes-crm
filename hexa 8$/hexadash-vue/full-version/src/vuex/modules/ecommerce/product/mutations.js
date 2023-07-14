export default {
  singleProductBegin(state) {
    state.isLoading = true;
  },
  singleProductSuccess(state, data) {
    state.isLoading = false;
    state.product = data;
  },
  singleProductErr(state, err) {
    state.isLoading = false;
    state.error = err;
  },

  filterProductBegin(state) {
    state.isProductLoading = true;
  },
  filterProductSuccess(state, data) {
    state.isProductLoading = false;
    state.products = data;
  },
  filterProductErr(state, err) {
    state.isProductLoading = false;
    state.error = err;
  },

  sortingProductBegin(state) {
    state.isProductLoading = true;
  },
  sortingProductSuccess(state, data) {
    state.isProductLoading = false;
    state.products = data;
  },
  sortingProductErr(state, err) {
    state.isProductLoading = false;
    state.error = err;
  },
};
