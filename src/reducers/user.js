import {
  SET_USER_FIELD_LOGIN_VALUE,
  SET_USER_FIELD_SIGN_UP_VALUE,
  LOGIN,
} from 'src/actions/user';

const initialState = {
  login: {
    email: '',
    password: '',
    token: '',
    logged: false,
  },
  signup: {
    email: '',
    password: '',
    groupName: '',
    firstname: '',
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
          logged: true,
        },
      };
    default:
      return state;
  }
};
