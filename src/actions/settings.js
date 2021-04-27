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

export const CLEAN_NEW_MEMBER_FIELDS = 'CLEAN_NEW_MEMBER_FIELDS';

export const cleanNewMemberFields = () => ({
  type: CLEAN_NEW_MEMBER_FIELDS,
});

export const SET_COLOR_TO_MEMBER = 'SET_COLOR_TO_MEMBER';

export const setColorToMember = (color) => ({
  type: SET_COLOR_TO_MEMBER,
  color,
});

export const SET_USABLE_COLORS = 'SET_USABLE_COLORS';

export const setUsableColors = () => ({
  type: SET_USABLE_COLORS,
});

export const SET_US = 'SET_US';

export const CLOSE_ALL_INPUT = 'CLOSE_ALL_INPUT';

export const closeAllInput = () => ({
  type: CLOSE_ALL_INPUT,
});

export const SET_ICON_TO_NEW_MEMBER = 'SET_ICON_TO_NEW_MEMBER';

export const setIconToNewMember = (icon) => ({
  type: SET_ICON_TO_NEW_MEMBER,
  icon,
});

export const SET_NEW_MEMBER_TO_CHANGE_FIELD_VALUE =
  'SET_NEW_MEMBER_TO_CHANGE_FIELD_VALUE';

export const setNewMemberToChangeFieldValue = (name, value) => ({
  type: SET_NEW_MEMBER_TO_CHANGE_FIELD_VALUE,
  name,
  value,
});

export const SET_ROLE_TO_NEW_MEMBER = 'SET_ROLE_TO_NEW_MEMBER';

export const setRoleToNewMember = (role) => ({
  type: SET_ROLE_TO_NEW_MEMBER,
  role,
});

export const SET_USABLE_COLORS_TO_ADD_MEMBER =
  'SET_USABLE_COLORS_TO_ADD_MEMBER';

export const setUsableColorsToAddMember = () => ({
  type: SET_USABLE_COLORS_TO_ADD_MEMBER,
});

export const DELETE_MEMBER = 'DELETE_MEMBER';

export const deleteMember = (id) => ({
  type: DELETE_MEMBER,
  id,
});

export const HIDE_ALERT_MODAL = 'HIDE_ALERT_MODAL';

export const hideAlertModal = () => ({
  type: HIDE_ALERT_MODAL,
});

export const SET_IS_OPENED_ALERT_MODAL = 'SET_IS_OPENED_ALERT_MODAL';

export const setIsOpenedAlertModal = () => ({
  type: SET_IS_OPENED_ALERT_MODAL,
});

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

export const updatePassword = (id) => ({
  type: UPDATE_PASSWORD,
  id,
});

export const CLEAN_PASSWORD_FIELD = 'CLEAN_PASSWORD_FIELD';

export const cleanPasswordField = () => ({
  type: CLEAN_PASSWORD_FIELD,
});
