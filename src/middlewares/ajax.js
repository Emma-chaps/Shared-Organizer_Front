import api from 'src/api';

import { LOGIN } from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // on ajoute le token par défaut pour l'instance axios
      api.defaults.headers.common.Authorization = `Bearer ${action.token}`;
      return next(action);
    }
    default:
      return next(action);
  }
};
