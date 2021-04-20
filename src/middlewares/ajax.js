import api from 'src/api';
import {
  FETCH_FAMILY_DATA,
  setFamilyData,
  UPDATE_GROUP_NAME,
  setGroupName,
} from 'src/actions/settings';

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
      const { groupNameToChange } = store.getState().settings;
      api
        .patch('/family-settings/group', { groupName: groupNameToChange })
        .then((result) => {
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
