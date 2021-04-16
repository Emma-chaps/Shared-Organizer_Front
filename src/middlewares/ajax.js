import api from 'src/api';
import { FETCH_FAMILY_DATA, setFamilyData } from 'src/actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FAMILY_DATA: {
      api
        .get('/family-settings')
        .then((result) => {
          console.log(result.data.group);
          return result.data.group;
        })
        .then(({ members, name }) => {
          store.dispatch(setFamilyData(members, name));
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
