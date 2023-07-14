import mutations from './mutations';
import { notification } from 'ant-design-vue';
import { db } from '@/config/database/firebase';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';

const addNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen Submited',
  });
};

const addNotificationError = err => {
  notification.error({
    message: err,
  });
};

const deleteNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen Deleted',
  });
};

const deleteNotificationError = err => {
  notification.error({
    message: err,
  });
};

const updateNotificationSuccess = () => {
  notification.success({
    message: 'Your Record hasbeen updated',
  });
};

const updateNotificationError = err => {
  notification.error({
    message: err,
  });
};

const state = () => ({
  data: [],
  url: null,
  fileLoading: false,
  loading: false,
  error: null,
});

const actions = {
  async fireStoreCrudSubmitData({ commit }, data) {
    try {
      await commit('fireStoreAddBeginBegin');
      await db
        .collection('crud')
        .doc(`${data.id}`)
        .set(data);
      await commit('fireStoreAddBeginSuccess', data);
      addNotificationSuccess();
    } catch (err) {
      await commit('fireStoreAddBeginErr', err);
      console.log(err);
      addNotificationError(err);
    }
  },

  async fireStoreCrudGetData({ commit }) {
    const queryData = [];
    try {
      await commit('fireStoreReadBegin');
      const query = await db.collection('crud').get();
      await query.forEach(doc => {
        queryData.push(doc.data());
      });
      await commit('fireStoreReadSuccess', queryData);
    } catch (err) {
      console.log(err);
      await commit('fireStoreReadErr', err);
    }
  },

  async fireStoreFileClear({ commit }) {
    try {
      await commit('fireStoreUploadBegin');
      commit('fireStoreUploadSuccess', null);
    } catch (err) {
      await commit('fireStoreUploadErr', err);
    }
  },

  async fireStoreFileUploader({ commit }, imageAsFile) {
    console.log(imageAsFile);
    try {
      await commit('fireStoreUploadBegin');
      const uploadTask = firebase
        .storage()
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
      await uploadTask.on(
        'state_changed',
        snapShot => {
          // takes a snap shot of the process as it is happening
          console.log(snapShot);
        },
        err => {
          // catches the errors
          console.log(err);
        },
        () => {
          firebase
            .storage()
            .ref('images')
            .child(imageAsFile.name)
            .getDownloadURL()
            .then(fireBaseUrl => {
              commit('fireStoreUploadSuccess', fireBaseUrl);
            });
        },
      );
    } catch (err) {
      console.log(err);
      await commit('fireStoreUploadErr', err);
    }
  },

  async fireStoreSingleDataGet({ commit }, id) {
    try {
      await commit('fireStoreSingleDataBegin');
      const query = await db
        .collection('crud')
        .where('id', '==', parseInt(id))
        .get();
      await query.forEach(doc => {
        commit('fireStoreSingleDataSuccess', doc.data());
        commit('fireStoreUploadSuccess', doc.data().image);
      });
    } catch (err) {
      await commit('fireStoreSingleDataErr', err);
    }
  },

  async fireStoreDataDelete({ commit }, id) {
    const data = [];
    try {
      await commit('fireStoreDeleteBegin');
      await db
        .collection('crud')
        .doc(`${id}`)
        .delete();
      const query = await db.collection('crud').get();
      await query.forEach(doc => {
        data.push(doc.data());
      });
      await commit('fireStoreDeleteSuccess', data);
      deleteNotificationSuccess();
    } catch (err) {
      await commit('fireStoreDeleteErr', err);
      console.log(err);
      deleteNotificationError(err);
    }
  },

  async fireStoreDataUpdate({ commit }, { id, data }) {
    try {
      await commit('fireStoreUpdateBegin');
      await db
        .collection('crud')
        .doc(`${id}`)
        .update({
          ...data,
        });

      const query = await db
        .collection('crud')
        .where('id', '==', parseInt(id))
        .get();
      await query.forEach(doc => {
        commit('fireStoreUpdateSuccess', doc.data());
      });

      updateNotificationSuccess();
    } catch (err) {
      console.log(err);
      await commit('fireStoreUpdateErr', err);
      updateNotificationError(err);
    }
  },
  async fireStoreDataSearch({ commit }, value) {
    const data = [];
    try {
      await commit('fireStoreSearchBegin');
      const query = await db
        .collection('crud')
        .orderBy('name')
        .startAt(value)
        .endAt(value + '\uf8ff')
        .get();
      await query.forEach(doc => {
        data.push(doc.data());
      });

      await commit('fireStoreSearchSuccess', data);
    } catch (err) {
      console.log(err);
      await commit('fireStoreSearchErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
