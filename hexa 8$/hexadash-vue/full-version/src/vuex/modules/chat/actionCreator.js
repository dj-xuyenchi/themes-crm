import staticData from '../../../demoData/chatData.json';
import mutations from './mutations';

const state = () => ({
  privetData: { data: staticData[0].privetChat, loading: false, error: null },
  groupChat: { data: staticData[0].groupChat, loading: false, error: null },
  groupData: { data: staticData[0].groupChat, loading: false, error: null },
  privetChat: { data: staticData[0].privetChat, loading: false, error: null },
});

const actions = {
  async filterSinglePage({ commit }, paramsId) {
    try {
      commit('singleChatBegin');
      const data = staticData[0].privetChat.filter((user) => {
        return user.email === paramsId;
      });
      commit('singleChatSuccess', data);
    } catch (err) {
      commit('singleChatErr', err);
    }
  },

  async updatePrivetChat({ commit }, { paramsId, pushItem }) {
    try {
      commit('updatePrivetChatBegin');
      const data = staticData[0].privetChat.map((item) => {
        const user = item;
        if (user.email === paramsId) {
          user.time = pushItem.time;
          user.content = [...user.content, pushItem];
        }
        return user;
      });
      commit('updatePrivetChatSuccess', data);
    } catch (err) {
      commit('updatePrivetChatErr', err);
    }
  },
  async filterSinglepageGroup({ commit }, paramsId) {
    try {
      commit('singleGroupChatBegin');
      const data = staticData[0].groupChat.filter((user) => {
        return user.id === paramsId;
      });
      commit('singleGroupChatSuccess', data);
    } catch (err) {
      commit('singleGroupChatErr', err);
    }
  },
  async updateGroupChat({ commit }, { paramsId, pushItem }) {
    try {
      commit('updateGroupChatBegin');
      const data = staticData[0].groupChat.map((item) => {
        const user = item;
        if (user.id === paramsId) {
          user.time = pushItem.time;
          user.content = [...user.content, pushItem];
        }
        return user;
      });
      commit('updateGroupChatSuccess', data);
    } catch (err) {
      commit('updateGroupChatErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
