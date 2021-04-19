import api from 'src/api';
import {
  FETCH_FAMILY_DATA,
  UPDATE_GROUP_NAME,
  setFamilyData,
  setGroupName,
} from 'src/actions/user';

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
    case UPDATE_GROUP_NAME: {
      const { groupName } = store.getState().user.family;
      api
        .patch('/family-settings/group', { groupName })
        .then((result) => {
          console.log(result.data);
          return result.data;
        })
        .then(({ updated }) => {
          if (updated) {
            store.dispatch(setGroupName());
          }
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
