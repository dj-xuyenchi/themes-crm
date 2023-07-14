import staticData from '../../../demoData/chatData.json';
import mutations from './mutations';

const state = () => ({
  privateData: { data: staticData[0].privateChat, loading: false, error: null },
  groupChat: { data: staticData[0].groupChat, loading: false, error: null },
  groupData: { data: staticData[0].groupChat, loading: false, error: null },
  privateChat: { data: staticData[0].privateChat, loading: false, error: null },
});

const actions = {
  async filterSinglePage({ commit }: { commit: any }, paramsId: any) {
    try {
      commit('singleChatBegin');
      const data = staticData[0].privateChat.filter((user: any) => {
        return user.email === paramsId;
      });
      commit('singleChatSuccess', data);
    } catch (err) {
      commit('singleChatErr', err);
    }
  },

  async updatePrivateChat({ commit }: { commit: any }, { paramsId, pushItem }: any) {
    try {
      commit('updatePrivateChatBegin');
      const data = staticData[0].privateChat.map((item: any) => {
        const user = item;
        if (user.email === paramsId) {
          user.time = pushItem.time;
          user.content = [...user.content, pushItem];
        }
        return user;
      });
      commit('updatePrivateChatSuccess', data);
    } catch (err) {
      commit('updatePrivateChatErr', err);
    }
  },
  async filterSinglepageGroup({ commit }: { commit: any }, paramsId: any) {
    try {
      commit('singleGroupChatBegin');
      const data = staticData[0].groupChat.filter((user: any) => {
        return user.id === paramsId;
      });
      commit('singleGroupChatSuccess', data);
    } catch (err) {
      commit('singleGroupChatErr', err);
    }
  },
  async updateGroupChat({ commit }: { commit: any }, { paramsId, pushItem }: any) {
    try {
      commit('updateGroupChatBegin');
      const data = staticData[0].groupChat.map((item: any) => {
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
