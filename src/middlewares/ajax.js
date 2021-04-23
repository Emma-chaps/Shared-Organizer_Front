import api from 'src/api';
import {
  FETCH_GROUP_DATA,
  setGroupData,
  UPDATE_GROUP_NAME,
  setGroupName,
  setMembersToEdit,
  UPDATE_MEMBER,
  ADD_NEW_MEMBER,
  fetchGroupData,
  assignMemberToCloseInputView,
} from 'src/actions/settings';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GROUP_DATA: {
      api
        .get('/group-infos')
        .then((result) => {
          return result.data.group;
        })
        .then(({ members, name }) => {
          store.dispatch(setGroupData(members, name));
          for (const member of members) {
            store.dispatch(setMembersToEdit(`id${member.id}`));
          }
        });
      return next(action);
    }
    case UPDATE_GROUP_NAME: {
      const { groupNameToChange } = store.getState().settings;
      api
        .patch('/group-settings/group', { groupName: groupNameToChange })
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
      api
        .patch('/group-settings/members', {
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
            store.dispatch(fetchGroupData());
            store.dispatch(assignMemberToCloseInputView(id));
          }
        });
      return next(action);
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
        .post('/group-settings', {
          firstname,
          email,
          password,
          icon,
          role: Number(role),
        })
        .then((result) => {
          console.log(result.data);
          return result.data;
        })
        .then(({ success }) => {
          if (success) {
            store.dispatch(fetchGroupData());
          }
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
