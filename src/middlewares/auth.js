import api from 'src/api';

import { SUBMIT_LOGIN, login } from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN: {
      const { email, password } = store.getState().user.login;
      console.log(email, password);
      api
        .post('/login', {
          email,
          password,
        })
        .then((result) => result.data)
        .then(({ error, token }) => {
          if (error.length < 1) {
            localStorage.setItem(`jwtoken`, token);
          } else {
            store.dispatch(login(token));
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
