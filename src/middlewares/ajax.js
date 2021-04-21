import api from 'src/api';
import {
  FETCH_FAMILY_DATA,
  setFamilyData,
  UPDATE_GROUP_NAME,
  setGroupName,
  setMembersToEdit,
  UPDATE_MEMBER,
  fetchFamilyData,
  ADD_NEW_MEMBER,
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
          for (const member of members) {
            store.dispatch(setMembersToEdit(`id${member.id}`));
          }
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
    case UPDATE_MEMBER: {
      const {
        id,
        firstname,
        email,
        password,
        icon,
        role,
      } = store.getState().settings.memberToChange;
      console.log(firstname, email, password, icon, role);

      api
        .patch('/family-settings/members', {
          id,
          firstname,
          email,
          password,
          icon,
          role: Number(role),
        })

        .then((result) => {
          return result.data;
        })
        .then(({ success }) => {
          if (success) {
            store.dispatch(fetchFamilyData());
          }
        });
      return {};
    }
    case ADD_NEW_MEMBER: {
      const {
        firstname,
        email,
        password,
        icon,
        role,
      } = store.getState().settings.memberToChange;
      console.log(firstname, email, password, icon, role);
      api
        .post('/family-settings', {
          firstname,
          email,
          password,
          icon,
          role: Number(role),
        })
        .then((result) => {
          console.log(result.data);
          return result.data;
        });
    }
    default:
      return next(action);
  }
};
