import initialState from '@/demoData/friends.json';
import posts from '@/demoData/post.json';
import mutations from './mutations';

const state = () => ({
  friends: initialState,
  isLoading: false,
  error: null,
  posts,
  postLoading: false,
});

const actions = {
  async profileFriendsChangeStatus({ commit }: { commit: any }, key: any) {
    try {
      commit('profileFriendsBegin');
      initialState.map((friend: any) => {
        if (friend.key === key) {
          return (friend.status = !friend.status);
        }
        return commit('profileFriendsSuccess', initialState);
      });
    } catch (err) {
      commit('profileFriendsErr', err);
    }
  },
  async submitPost({ commit }: { commit: any }, data: any) {
    try {
      commit('postDataBegin');
      commit('postDataSuccess', data);
    } catch (err) {
      commit('postDataErr', err);
    }
  },

  async likeUpdate({ commit }: { commit: any }, { data, key }: any) {
    try {
      commit('postDataBegin');
      data.map((post: any) => {
        if (post.postId === key) {
          return (post.like += 1);
        }
        return commit('postDataSuccess', data);
      });
    } catch (err) {
      commit('postDataErr', err);
    }
  },

  async commentUpdate({ commit }: { commit: any }, { data, key, comment }: any) {
    try {
      commit('postDataBegin');
      data.map((post: any) => {
        if (post.postId === key) {
          return (post.comment = [
            ...post.comment,
            {
              time: new Date().getTime(),
              from: 'David Warner',
              text: comment,
            },
          ]);
        }
        return commit('postDataSuccess', data);
      });
    } catch (err) {
      commit('postDataErr', err);
    }
  },

  async postDelete({ commit }: { commit: any }, { data, key }: any) {
    try {
      commit('postDataBegin');
      const posts = data.filter((post: any) => {
        return post.postId !== key;
      });
      return commit('postDataSuccess', posts);
    } catch (err) {
      commit('postDataErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
