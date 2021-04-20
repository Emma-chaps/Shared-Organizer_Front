export const SET_INPUT_STATE = 'SET_INPUT_STATE';

export const setInputState = () => ({
  type: SET_INPUT_STATE,
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

export const ASSIGN_MEMBER_TO_OPEN_INPUT_VIEW =
  'ASSIGN_MEMBER_TO_OPEN_INPUT_VIEW';

export const assignMemberToOpenInputView = (firstname) => ({
  type: ASSIGN_MEMBER_TO_OPEN_INPUT_VIEW,
  firstname,
});

export const SET_MEMBERS_TO_EDIT = 'SET_MEMBERS_TO_EDIT';

export const setMembersToEdit = (firstname) => ({
  type: SET_MEMBERS_TO_EDIT,
  firstname,
});
