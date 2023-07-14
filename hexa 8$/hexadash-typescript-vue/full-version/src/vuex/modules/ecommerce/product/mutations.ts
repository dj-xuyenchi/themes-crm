export default {
  singleProductBegin(state: any) {
    state.isLoading = true;
  },
  singleProductSuccess(state: any, data: any) {
    state.isLoading = false;
    state.product = data;
  },
  singleProductErr(state: any, err: any) {
    state.isLoading = false;
    state.error = err;
  },
  filterProductBegin(state: any) {
    state.isProductLoading = true;
  },
  filterProductSuccess(state: any, data: any) {
    state.isProductLoading = false;
    state.products = data;
  },
  filterProductErr(state: any, err: any) {
    state.isProductLoading = false;
    state.error = err;
  },
  sortingProductBegin(state: any) {
    state.isProductLoading = true;
  },
  sortingProductSuccess(state: any, data: any) {
    state.isProductLoading = false;
    state.products = data;
  },
  sortingProductErr(state: any, err: any) {
    state.isProductLoading = false;
    state.error = err;
  },
};
