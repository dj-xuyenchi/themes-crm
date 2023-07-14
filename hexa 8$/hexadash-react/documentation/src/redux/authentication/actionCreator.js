import Cookies from 'js-cookie';
import actions from './actions';

const { loginBegin, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = () => {
  return async dispatch => {
    try {
      dispatch(loginBegin());
      setTimeout(() => {
        Cookies.set('logedIn', true);
        return window.location.replace('/admin');;
      }, 1000);
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      Cookies.remove('logedIn');
      dispatch(logoutSuccess(false));
      return window.location.replace('/');
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };
