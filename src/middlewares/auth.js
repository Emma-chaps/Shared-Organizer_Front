import api from 'src/api';
import jwtDecode from 'jwt-decode';

import {
  REHYDRATE,
  SUBMIT_SIGN_UP,
  SUBMIT_LOGIN,
  login,
  LOGOUT,
  resetUserData,
  setSignupErrorMessage,
  setLoginErrorMessage,
} from 'src/actions/user';
import { resetCalendarData } from 'src/actions/calendar';
import { setColorToMember, fetchGroupData } from 'src/actions/settings';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REHYDRATE: {
      const token = localStorage.getItem('jwtoken');
      if (token) {
        const decodeToken = jwtDecode(token);
        const expiryDate = new Date(decodeToken.exp * 1000);
        console.log(expiryDate);
        const currentDate = new Date();
        if (expiryDate > currentDate) {
          store.dispatch(login(token));
          store.dispatch(fetchGroupData());
        }
      }
      return next(action);
    }
    case SUBMIT_SIGN_UP: {
      const color = 'light-blue';
      const { email, password, firstname, groupName } =
        store.getState().user.signup;
      api
        .post('/signup', {
          email,
          password,
          firstname,
          groupName,
          color,
        })
        .then((result) => result.data)
        .then(({ connected, token }) => {
          if (connected) {
            localStorage.setItem('jwtoken', token);
            store.dispatch(login(token));
            store.dispatch(setColorToMember(color));
            store.dispatch(fetchGroupData());
          }
        })
        .catch((error) => {
          if (error.response) {
            store.dispatch(setSignupErrorMessage(error.response.data.error));
          }
        });
      return next(action);
    }
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user.login;
      api
        .post('/login', {
          email,
          password,
        })
        .then((result) => result.data)
        .then(({ connected, token }) => {
          if (connected) {
            localStorage.setItem('jwtoken', token);
            store.dispatch(login(token));
            store.dispatch(fetchGroupData());
          }
        })
        .catch((error) => {
          if (error.response) {
            store.dispatch(setLoginErrorMessage(error.response.data.error));
          }
        });
      return next(action);
    }
    case LOGOUT: {
      localStorage.removeItem('jwtoken');
      store.dispatch(resetUserData());
      store.dispatch(resetCalendarData());
      return next(action);
    }
    default:
      return next(action);
  }
};
