export const SET_GROUP_NAME_INPUT_STATE = 'SET_GROUP_NAME_INPUT_STATE';

export const setGroupNameInputState = () => ({
  type: SET_GROUP_NAME_INPUT_STATE,
});

export const SET_NEW_GROUP_NAME_FIELD_VALUE = 'SET_NEW_GROUP_NAME_FIELD_VALUE';

export const setNewGroupNameFieldValue = (value) => ({
  type: SET_NEW_GROUP_NAME_FIELD_VALUE,
  value,
});

export const UPDATE_GROUP_NAME = 'UPDATE_GROUP_NAME';

export const updateGroupName = () => ({
  type: UPDATE_GROUP_NAME,
});

export const SET_GROUP_NAME = 'SET_GROUP_NAME';

export const setGroupName = () => ({
  type: SET_GROUP_NAME,
});

export const SET_MEMBER_TO_CHANGE_FIELD_VALUE =
  'SET_MEMBER_TO_CHANGE_FIELD_VALUE';

export const setMemberToChangeFieldValue = (name, value) => ({
  type: SET_MEMBER_TO_CHANGE_FIELD_VALUE,
  name,
  value,
});

export const COPY_MEMBER = 'COPY_MEMBER';

export const copyMember = (member) => ({
  type: COPY_MEMBER,
  member,
});

export const COPY_GROUP_NAME = 'COPY_GROUP_NAME';

export const copyGroupName = (groupName) => ({
  type: COPY_GROUP_NAME,
  groupName,
});

export const FETCH_GROUP_DATA = 'FETCH_GROUP_DATA';

export const fetchGroupData = () => ({
  type: FETCH_GROUP_DATA,
});

export const SET_GROUP_DATA = 'SET_GROUP_DATA';

export const setGroupData = (members, name) => ({
  type: SET_GROUP_DATA,
  members,
  name,
});

export const ASSIGN_MEMBER_TO_OPEN_INPUT_VIEW =
  'ASSIGN_MEMBER_TO_OPEN_INPUT_VIEW';

export const assignMemberToOpenInputView = (id) => ({
  type: ASSIGN_MEMBER_TO_OPEN_INPUT_VIEW,
  id,
});

export const SET_MEMBERS_TO_EDIT = 'SET_MEMBERS_TO_EDIT';

export const setMembersToEdit = (id) => ({
  type: SET_MEMBERS_TO_EDIT,
  id,
});

export const ASSIGN_MEMBER_TO_CLOSE_INPUT_VIEW =
  'ASSIGN_MEMBER_TO_CLOSE_INPUT_VIEW';

export const assignMemberToCloseInputView = (id) => ({
  type: ASSIGN_MEMBER_TO_CLOSE_INPUT_VIEW,
  id,
});

export const UPDATE_MEMBER = 'UPDATE_MEMBER';

export const updateMember = () => ({
  type: UPDATE_MEMBER,
});

export const HIDE_MODAL = 'HIDE_MODAL';

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const SET_IS_OPENED_MODAL = 'SET_IS_OPENED_MODAL';

export const setIsOpenedModal = () => ({
  type: SET_IS_OPENED_MODAL,
});

export const ADD_NEW_MEMBER = 'ADD_NEW_MEMBER';

export const addNewMember = () => ({
  type: ADD_NEW_MEMBER,
});

export const SET_SELECTED_ICON = 'SET_SELECTED_ICON';

export const setSelectedIcon = (icon) => ({
  type: SET_SELECTED_ICON,
  icon,
});

export const SET_SELECTED_ROLE = 'SET_SELECTED_ROLE';

export const setSelectedRole = (role) => ({
  type: SET_SELECTED_ROLE,
  role,
});
