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

export const SET_SELECT_ICON = 'SET_SELECT_ICON';

export const setSelectedIcon = (name) => ({
  type: SET_SELECT_ICON,
  name,
});

export const LOGOUT = 'LOGOUT';

export const logout = () => ({
  type: LOGOUT,
});

export const RESET_USER_DATA = 'RESET_USER_DATA';

export const resetUserData = () => ({
  type: RESET_USER_DATA,
});

export const SET_SIGNUP_ERROR_MESSAGE = 'SET_SIGNUP_ERROR_MESSAGE';

export const setSignupErrorMessage = (error) => ({
  type: SET_SIGNUP_ERROR_MESSAGE,
  error,
});

export const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';

export const setLoginErrorMessage = (error) => ({
  type: SET_LOGIN_ERROR_MESSAGE,
  error,
});
