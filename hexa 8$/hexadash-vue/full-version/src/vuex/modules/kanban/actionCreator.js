import kanbanBoardData from '@/demoData/kanbanBoard.json';
import kanbanTaskData from '@/demoData/kanbanTasks.json';
import mutations from './mutations';

const state = () => ({
  boardData: kanbanBoardData,
  taskData: kanbanTaskData,
  loading: false,
  tsLoading: false,
  error: null,
});

const actions = {
  async ToAddBoard({ commit }, data) {
    try {
      commit('toAddBoardBegin');
      commit('toAddBoardSuccess', data);
    } catch (err) {
      commit('toAddBoardErr', err);
    }
  },

  async ToAddTask({ commit }, data) {
    try {
      commit('toAddTaskBegin');
      commit('toAddTaskSuccess', data);
    } catch (err) {
      commit('toAddTaskErr', err);
    }
  },

  async ToDeleteTask({ commit }, data) {
    try {
      commit('toDeleteTaskBegin');
      commit('toDeleteTaskSuccess', data);
    } catch (err) {
      commit('toDeleteTaskErr', err);
    }
  },
};
export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
