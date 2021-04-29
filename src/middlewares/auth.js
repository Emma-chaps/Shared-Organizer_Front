import api from 'src/api';

import {
  REHYDRATE,
  SUBMIT_SIGN_UP,
  SUBMIT_LOGIN,
  login,
  LOGOUT,
} from 'src/actions/user';
import { setColorToMember, fetchGroupData } from 'src/actions/settings';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REHYDRATE: {
      const token = localStorage.getItem('jwtoken');
      if (token) {
        store.dispatch(login(token));
        store.dispatch(fetchGroupData());
      }
      return next(action);
    }
    case SUBMIT_SIGN_UP: {
      const {
        email,
        password,
        firstname,
        groupName,
      } = store.getState().user.signup;
      api
        .post('/signup', {
          email,
          password,
          firstname,
          groupName,
        })
        .then((result) => result.data)
        .then(({ connected, token, error }) => {
          if (connected) {
            localStorage.setItem('jwtoken', token);
            store.dispatch(login(token));
            store.dispatch(setColorToMember(icon));
            store.dispatch(fetchGroupData());
          }
          if (error) {
            console.log(error);
          }
        })
        .catch((error) => {
          console.log('hey', error);
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
        .then((value) => {
          if (value.connected) {
            localStorage.setItem('jwtoken', value.token);
            store.dispatch(login(value.token));
            store.dispatch(fetchGroupData());
          } else {
            console.log(value);
          }
        })
        .catch((error) => console.error(error.error));
      return next(action);
    }
    case LOGOUT: {
      localStorage.removeItem('jwtoken');
      return next(action);
    }

    default:
      return next(action);
  }
};
