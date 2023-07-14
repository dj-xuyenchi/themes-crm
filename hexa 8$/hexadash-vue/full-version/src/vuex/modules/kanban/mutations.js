export default {
  toAddBoardBegin(state) {
    state.loading = true;
  },

  toAddBoardSuccess(state, data) {
    state.loading = false;
    state.boardData = data;
  },

  toAddBoardErr(state, err) {
    state.loading = false;
    state.error = err;
  },
  toAddTaskBegin(state) {
    state.tsLoading = true;
  },

  toAddTaskSuccess(state, data) {
    state.tsLoading = false;
    state.taskData = data;
  },

  toAddTaskErr(state, err) {
    state.tsLoading = false;
    state.error = err;
  },

  toDeleteTaskBegin(state) {
    state.tsLoading = true;
  },

  toDeleteTaskSuccess(state, data) {
    state.tsLoading = false;
    state.taskData = data;
  },

  toDeleteTaskErr(state, err) {
    state.tsLoading = false;
    state.error = err;
  },
};
