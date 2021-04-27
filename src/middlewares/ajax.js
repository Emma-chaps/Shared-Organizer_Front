import { widgetsCombiner } from 'src/selectors/widgetsCombiner';
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
  setUsableColors,
  closeAllInput,
  DELETE_MEMBER,
  UPDATE_PASSWORD,
} from 'src/actions/settings';
import { setFilteredMembers } from 'src/actions/widget';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GROUP_DATA: {
      api
        .get('/group-infos')
        .then((result) => result.data.group)
        .then(({ members, name }) => {
          store.dispatch(setGroupData(members, name));
          if (members) {
            for (const member of members) {
              store.dispatch(setMembersToEdit(`id${member.id}`));
            }
            store.dispatch(setUsableColors());
          }
          return members;
        })
        .then((members) => {
          store.dispatch(setFilteredMembers(members));
        });
      return next(action);
    }
    case UPDATE_GROUP_NAME: {
      const { groupNameToChange } = store.getState().settings;
      api
        .patch('/group-settings/group', { groupName: groupNameToChange })
        .then((result) => result.data)
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
        .then((result) => result.data)
        .then(({ success }) => {
          if (success) {
            store.dispatch(fetchGroupData());
            store.dispatch(closeAllInput());
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
      } = store.getState().settings.newMember;
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

    case DELETE_MEMBER: {
      api
        .delete(`/group-settings/member/delete/${action.id}`)
        .then((result) => {
          return result.data;
        })
        .then(({ success }) => {
          if (success) {
            store.dispatch(fetchGroupData());
          }
        });
      return next(action);
    }
    case UPDATE_PASSWORD: {
      const { password } = store.getState().settings.memberToChange;
      api
        .patch('/group-settings/member/password', {
          id: action.id,
          password,
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
