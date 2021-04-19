import {
  SET_USER_FIELD_LOGIN_VALUE,
  SET_USER_FIELD_SIGN_UP_VALUE,
  SET_GROUP_NAME_FIELD_VALUE,
  LOGIN,
  SELECT_ICON,
  SET_FAMILY_DATA,
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
    icon: '',
  },
  family: {
    groupName: '',
    members: [],
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
    case SELECT_ICON:
      return {
        ...state,
        signup: {
          ...state.signup,
          icon: action.name,
        },
      };
    case SET_FAMILY_DATA: {
      return {
        ...state,
        family: {
          ...state.family,
          groupName: action.name,
          members: action.members,
        },
      };
    }
    case SET_GROUP_NAME_FIELD_VALUE: {
      return {
        ...state,
        family: {
          ...state.family,
          groupName: action.value,
        },
      };
    }
    default:
      return state;
  }
};
