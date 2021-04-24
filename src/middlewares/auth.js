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
        icon,
      } = store.getState().user.signup;
      api
        .post('/signup', {
          email,
          password,
          firstname,
          groupName,
          icon,
        })
        .then((result) => {
          console.log(result.data);
          return result.data;
        })
        .then(({ connected, token }) => {
          if (connected) {
            localStorage.setItem('jwtoken', token);
            store.dispatch(login(token));
            store.dispatch(setColorToMember(icon));
          } else {
            // add errors messages
          }
        })
        .catch((error) => {
          console.error(error);
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
        .then((result) => {
          console.log(result.data);
          return result.data;
        })
        .then(({ connected, token }) => {
          if (connected) {
            localStorage.setItem('jwtoken', token);
            store.dispatch(login(token));
            store.dispatch(fetchGroupData());
          }
        });
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
