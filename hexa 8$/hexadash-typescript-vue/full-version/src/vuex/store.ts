import { createStore } from 'vuex';
import auth from './modules/authentication/axios/actionCreator';
import themeLayout from './modules/themeLayout/actionCreator';
import chartContent from './modules/chartContent/actionCreator';
import task from './modules/task/actionCreator';
import chat from './modules/chat/actionCreator';
import email from './modules/email/actionCreator';
import headerSearchData from './modules/headerSearch/actionCreator';
import ecommerce from './modules/ecommerce/product/actionCreator';
import orders from './modules/ecommerce/orders/actionCreator';
import cart from './modules/ecommerce/cart/actionCreator';
import profile from './modules/profile/actionCreator';
import gallery from './modules/gallery';
import project from './modules/project/actionCreator';
import jobSearch from './modules/jobSearch/actionCreator';
import crud from './modules/crud/axios/actionCreator';
import users from './modules/users';
import dataTable from './modules/data-filter/actionCreator';
import team from './modules/team/actionCreator';
import contact from './modules/contact/actionCreator';

export default createStore({
  modules: {
    themeLayout,
    auth,
    chartContent,
    task,
    chat,
    email,
    headerSearchData,
    ecommerce,
    orders,
    cart,
    profile,
    gallery,
    project,
    jobSearch,
    crud,
    users,
    dataTable,
    team,
    contact,
  },
});
