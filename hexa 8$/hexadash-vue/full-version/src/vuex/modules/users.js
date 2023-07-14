import initialState from '../../demoData/usersData.json';

const state = () => ({
  data: initialState,
  isLoading: false,
  error: null,
});

export default {
  namespaced: false,
  state,
};
