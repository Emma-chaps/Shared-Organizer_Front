export const REHYDRATE = 'REHYDRATE';

export const rehydrate = () => ({
  type: REHYDRATE,
});

export const SET_USER_FIELD_LOGIN_VALUE = 'SET_USER_FIELD_LOGIN_VALUE';

export const setUserFieldLoginValue = (name, value) => ({
  type: SET_USER_FIELD_LOGIN_VALUE,
  name,
  value,
});

export const SET_USER_FIELD_SIGN_UP_VALUE = 'SET_USER_FIELD_SIGN_UP_VALUE';

export const setUserFieldSignUpValue = (name, value) => ({
  type: SET_USER_FIELD_SIGN_UP_VALUE,
  name,
  value,
});

export const LOGIN = 'LOGIN';

export const SUBMIT_SIGN_UP = 'SUBMIT_SIGN_UP';

export const submitSignUp = () => ({
  type: SUBMIT_SIGN_UP,
});

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const login = (token) => ({
  type: LOGIN,
  token,
});

export const SELECT_ICON = 'SELECT_ICON';

export const selectedIcon = (name) => ({
  type: SELECT_ICON,
  name,
});

export const FETCH_FAMILY_DATA = 'FETCH_FAMILY_DATA';

export const fetchFamilyData = () => ({
  type: FETCH_FAMILY_DATA,
});

export const SET_FAMILY_DATA = 'SET_FAMILY_DATA';

export const setFamilyData = (members, name) => ({
  type: SET_FAMILY_DATA,
  members,
  name,
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
