import {
  SET_USER_FIELD_LOGIN_VALUE,
  SET_USER_FIELD_SIGN_UP_VALUE,
  LOGIN,
  LOGOUT,
  SET_SELECT_ICON,
  RESET_USER_DATA,
  SET_SIGNUP_ERROR_MESSAGE,
  SET_LOGIN_ERROR_MESSAGE,
} from 'src/actions/user';

import { isAdmin } from 'src/selectors/utils';

const initialState = {
  login: {
    email: '',
    password: '',
    token: '',
    isLogged: false,
    isAdmin: false,
    backError: '',
  },
  signup: {
    email: '',
    password: '',
    groupName: '',
    firstname: '',
    icon: '',
    backError: '',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_FIELD_LOGIN_VALUE:
      return {
        ...state,
        login: {
          ...state.login,
          [action.name]: action.value,
        },
      };
    case SET_USER_FIELD_SIGN_UP_VALUE:
      return {
        ...state,
        signup: {
          ...state.signup,
          [action.name]: action.value,
        },
      };
    case LOGIN:
      return {
        ...state,
        login: {
          ...state.login,
          token: action.token,
          isLogged: true,
          isAdmin: isAdmin(action.token),
        },
      };
    case SET_SELECT_ICON:
      return {
        ...state,
        signup: {
          ...state.signup,
          icon: action.name,
        },
      };
    case LOGOUT:
      return {
        ...state,
        login: {
          ...state.login,
          isLogged: false,
          isAdmin: false,
        },
      };
    case RESET_USER_DATA:
      return {
        ...state,
        login: {
          email: '',
          password: '',
          token: '',
          isLogged: false,
          isAdmin: false,
        },
        signup: {
          email: '',
          password: '',
          groupName: '',
          firstname: '',
          icon: '',
        },
      };
    case SET_SIGNUP_ERROR_MESSAGE:
      return {
        ...state,
        signup: {
          ...state.signup,
          backError: action.error,
        },
      };
    case SET_LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        login: {
          ...state.login,
          backError: action.error,
        },
      };
    default:
      return state;
  }
};
