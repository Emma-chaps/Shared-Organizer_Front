export const SET_USER_FIELD_VALUE = 'SET_USER_FIELD_VALUE';

export const setUserFieldValue = (name, value) => ({
  type: SET_USER_FIELD_VALUE,
  name,
  value,
});
