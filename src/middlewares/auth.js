import api from 'src/api';

import {
  REHYDRATE,
  SUBMIT_SIGN_UP,
  SUBMIT_LOGIN,
  login,
  LOGOUT,
  setLoginError,
} from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REHYDRATE: {
      const token = localStorage.getItem('jwtoken');
      if (token) {
        store.dispatch(login(token));
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
      console.log(email, password, firstname, groupName, icon);
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
        .then(({ connected, token, error }) => {
          if (connected) {
            localStorage.setItem('jwtoken', token);
            store.dispatch(login(token));
          } else {
            store.dispatch(setLoginError(error));
          }
        })
        .catch((error) => {
          console.error(error);
        });
      return next(action);
    }
    case LOGOUT: {
      localStorage.removeItem('jwtoken');
      // rehydrate();
      return next(action);
    }

    default:
      return next(action);
  }
};
