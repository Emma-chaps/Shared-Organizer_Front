import api from 'src/api';
import {
  FETCH_GROUP_DATA,
  setGroupData,
  UPDATE_GROUP_NAME,
  setGroupName,
  UPDATE_MEMBER,
  ADD_NEW_MEMBER,
  fetchGroupData,
  setUsableColors,
  closeAllInput,
  DELETE_MEMBER,
  UPDATE_PASSWORD,
  setUptateUserErrorMessage,
  setAddUserErrorMessage,
  hideModal,
} from 'src/actions/settings';
import { setFilteredMembers } from 'src/actions/widget';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_GROUP_DATA: {
      api
        .get('/group')
        .then((result) => result.data)
        .then(({ success, group }) => {
          if (success) {
            store.dispatch(setGroupData(group.members, group.name));
            store.dispatch(setUsableColors());
            store.dispatch(setFilteredMembers(group.members));
          }
        });
      return next(action);
    }
    case UPDATE_GROUP_NAME: {
      const { groupNameToChange } = store.getState().settings;
      api
        .patch('/group', { groupName: groupNameToChange })
        .then((result) => result.data)
        .then(({ updated }) => {
          if (updated) {
            store.dispatch(setGroupName());
          }
        });
      return next(action);
    }
    case UPDATE_MEMBER: {
      const { id, firstname, email, color, role } =
        store.getState().settings.memberToChange;
      api
        .patch(`/member/${id}`, {
          firstname,
          email,
          color,
          role: Number(role),
        })
        .then((result) => result.data)
        .then(({ success }) => {
          if (success) {
            store.dispatch(fetchGroupData());
            store.dispatch(closeAllInput());
          }
        })
        .catch((error) => {
          if (error.response) {
            store.dispatch(
              setUptateUserErrorMessage(error.response.data.userError)
            );
          }
        });
      return next(action);
    }
    case ADD_NEW_MEMBER: {
      const { firstname, email, password, color, role } =
        store.getState().settings.newMember;
      api
        .post('/member', {
          firstname,
          email,
          password,
          color,
          role: Number(role),
        })
        .then((result) => result.data)
        .then(({ success }) => {
          if (success) {
            store.dispatch(fetchGroupData());
            // close add a member modale
            store.dispatch(hideModal());
          }
        })
        .catch((error) => {
          if (error.response) {
            store.dispatch(
              setAddUserErrorMessage(error.response.data.userError)
            );
          }
        });
      return next(action);
    }

    case DELETE_MEMBER: {
      api
        .delete(`/member/${action.id}`)
        .then((result) => result.data)
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
        .patch(`/password/${action.id}`, {
          password,
        })
        .then((result) => result.data)
        .then(({ success, message }) => {
          if (success) {
            // store.dispatch(setSuccessMessage(message));
          }
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
