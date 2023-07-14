import mutations from './mutations';
import dayjs from 'dayjs';
const events = [
  {
    title: 'Family Events',
    date: [dayjs().format('MM/DD/YYYY'), dayjs().format('MM/DD/YYYY')],
    id: 1,
    label: 'success',
    time: ['2:00 pm', '3:00 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Product Launch',
    date: [dayjs().format('MM/DD/YYYY'), dayjs(dayjs().add(2, 'days')).format('MM/DD/YYYY')],
    id: 2,
    label: 'primary',
    time: ['4:00 pm', '5:00 pm'],
    type: 'reminder',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Team Meeting',
    id: 3,
    date: [
      dayjs(dayjs().subtract(2, 'days')).format('MM/DD/YYYY'),
      dayjs(dayjs().subtract(2, 'days')).format('MM/DD/YYYY'),
    ],
    label: 'secondary',
    time: ['2:00 pm', '3:00 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'UI/UX Tasks',
    id: 4,
    date: ['09/12/2021', '09/12/2021'],
    label: 'info',
    time: ['9:00 am', '3:00 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Project Update',
    id: 5,
    date: [dayjs(dayjs().add(5, 'days')).format('MM/DD/YYYY'), dayjs(dayjs().add(5, 'days')).format('MM/DD/YYYY')],
    label: 'warning',
    time: ['12:00 pm', '2:30 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
];
const initialState = [
  {
    title: 'Family Events',
    date: [dayjs().format('MM/DD/YYYY'), dayjs().format('MM/DD/YYYY')],
    id: 1,
    label: 'success',
    time: ['2:00 pm', '3:00 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Product Launch',
    date: [dayjs().format('MM/DD/YYYY'), dayjs(dayjs().add(2, 'days')).format('MM/DD/YYYY')],
    id: 2,
    label: 'primary',
    time: ['4:00 pm', '5:00 pm'],
    type: 'reminder',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Team Meeting',
    id: 3,
    date: [
      dayjs(dayjs().subtract(2, 'days')).format('MM/DD/YYYY'),
      dayjs(dayjs().subtract(2, 'days')).format('MM/DD/YYYY'),
    ],
    label: 'secondary',
    time: ['2:00 pm', '3:00 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'UI/UX Tasks',
    id: 4,
    date: ['09/12/2021', '09/12/2021'],
    label: 'info',
    time: ['9:00 am', '3:00 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
  {
    title: 'Project Update',
    id: 5,
    date: [dayjs(dayjs().add(5, 'days')).format('MM/DD/YYYY'), dayjs(dayjs().add(5, 'days')).format('MM/DD/YYYY')],
    label: 'warning',
    time: ['12:00 pm', '2:30 pm'],
    type: 'event',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  },
];
const state = () => ({
  events,
  loading: false,
  error: null,
  eventVisible: false,
  sLoading: false,
});

const actions = {
  async calendarGetData({ commit }) {
    try {
      commit('calendarReadBegin');
      commit('calendarReadSuccess', initialState);
    } catch (err) {
      commit('calendarReadErr', err);
    }
  },
  async addNewEvents({ commit }, events) {
    try {
      commit('calendarReadBegin');
      commit('calendarReadSuccess', events);
    } catch (err) {
      commit('calendarReadErr', err);
    }
  },
  async updateCurrentEvent({ commit }, { events, event, id }) {
    try {
      commit('calendarReadBegin');
      events.map((value) => {
        const item = value;
        if (item.id === id) {
          item.title = event.title;
          item.description = event.description;
          item.date = event.date;
          item.time = event.time;
          item.label = event.label;
          item.type = event.type;
        }
        return item;
      });
      // console.log(events);
      commit('calendarReadSuccess', events);
    } catch (err) {
      commit('calendarReadErr', err);
    }
  },

  async eventVisible({ commit }, data) {
    try {
      commit('eventVisibleBegin');
      commit('eventVisibleSuccess', data);
    } catch (err) {
      commit('eventVisibleErr', err);
    }
  },

  async calendarAddData({ commit }, data) {
    try {
      commit('calendarReadBegin');
      commit('calendarReadSuccess', data);
    } catch (err) {
      commit('calendarReadErr', err);
    }
  },

  async calendarDeleteData({ commit }, data) {
    try {
      commit('calendarReadBegin');
      commit('calendarReadSuccess', data);
    } catch (err) {
      commit('calendarReadErr', err);
    }
  },

  async onStarUpdate({ commit }, { data, id }) {
    try {
      commit('starUpdateBegin');
      data.map((item) => {
        if (item.key === id) {
          const fav = item;
          if (item.stared) {
            fav.stared = false;
          } else {
            fav.stared = true;
          }
        }
        return commit('starUpdateSuccess', data);
      });
    } catch (err) {
      commit('starUpdateErr', err);
    }
  },

  async onLabelUpdate({ commit }, { data, id, value }) {
    try {
      commit('labelUpdateBegin');
      data.map((item) => {
        if (item.key === id) {
          const fav = item;
          fav.label = value;
        }
        return commit('labelUpdateSuccess', data);
      });
    } catch (err) {
      commit('labelUpdateErr', err);
    }
  },

  async onLabelFilter({ commit }, label) {
    try {
      commit('labelUpdateBegin');
      const data = initialState.filter((item) => {
        return label === 'all' ? initialState : label === 'favorite' ? item.stared : item.label === label;
      });

      commit('labelUpdateSuccess', data);
    } catch (err) {
      commit('labelUpdateErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
