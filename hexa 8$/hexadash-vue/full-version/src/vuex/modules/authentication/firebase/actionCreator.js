import mutations from './mutations';
import firebase from 'firebase';
import { notification } from 'ant-design-vue';
import { db } from '@/config/database/firebase';
import 'firebase/auth'; // for authentication

const loginNotificationError = err => {
  notification.error({
    message: err,
  });
};

const state = () => ({
  data: null,
  loading: false,
  isLogout: false,
  isLogin: false,
  error: false,
  isSignUpError: false,
  isSignUpLoading: false,
  uid: false,
});

const actions = {
  async firebaseAuthLogin({ commit }, { data }) {
    try {
      await commit('firebaseLoginBegin');
      await firebase.auth().signInWithEmailAndPassword(data.username, data.password);
      firebase.auth().onAuthStateChanged(user => {
        user = user ? user : {};
        commit('firebaseLoginSuccess', user.uid ? user.uid : false);
      });
    } catch (err) {
      loginNotificationError(err.message);
      await commit('firebaseLoginErr', err);
    }
  },

  async firebaseAuthLoginWithGoogle({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await commit('firebaseLoginBegin');
      const result = await firebase.auth().signInWithPopup(provider);
      console.log(result);
      await commit('firebaseLoginSuccess', result);
    } catch (err) {
      await commit('firebaseLoginErr', err);
    }
  },

  async firebaseAuthLoginWithFacebook({ commit }) {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      await commit('firebaseLoginBegin');
      const result = await firebase.auth().signInWithPopup(provider);
      await commit('firebaseLoginSuccess', result);
    } catch (err) {
      await commit('firebaseLoginErr', err);
    }
  },

  async firebaseAuthGetUid({ commit }) {
    try {
      await commit('firebaseLoginBegin');
      firebase.auth().onAuthStateChanged(async user => {
        user = user ? user : {};
        await commit('firebaseLoginSuccess', user.uid ? user.uid : false);
      });
    } catch (err) {
      await commit('firebaseLoginErr', err);
    }
  },

  async firebaseAuthLogout({ commit }, logOutRoot) {
    try {
      await commit('firebaseLogOutBegin');
      await firebase.auth().signOut();
      await commit('firebaseLogOutSuccess', false);
      await logOutRoot();
    } catch (err) {
      await commit('firebaseLogOutErr', err);
    }
  },

  async firebaseAuthSignUp({ commit }, newUser) {
    try {
      await commit('firebaseSignUpBegin');
      const resp = await firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
      await db
        .collection('users')
        .doc(resp.user.uid)
        .set({
          ...newUser,
        });
      await commit('firebaseSignUpSuccess', resp.user.uid);
    } catch (err) {
      loginNotificationError(err.message);
      await commit('firebaseSignUpErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
