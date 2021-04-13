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

export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const LOGIN = 'LOGIN';

export const login = (token) => ({
  type: LOGIN,
  token,
});
