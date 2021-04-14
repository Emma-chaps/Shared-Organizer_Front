import api from 'src/api';

import {
  REHYDRATE,
  SUBMIT_SIGN_UP,
  SUBMIT_LOGIN,
  login,
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
      } = store.getState().user.signup;
      api
        .post('/signup', {
          email,
          password,
          firstname,
          groupName,
        })
        .then((result) => result.data)
        .then(({ created, token }) => {
          if (created) {
            localStorage.setItem(`jwtoken`, token);
            store.dispatch(login(token));
          } else {
            //add errors messages
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
        .then((result) => result.data)
        .then(({ connected, token }) => {
          if (connected) {
            localStorage.setItem(`jwtoken`, token);
            store.dispatch(login(token));
          } else {
            //add errors messages
          }
        })
        .catch((error) => {
          console.error(error);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};