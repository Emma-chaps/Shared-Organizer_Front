import { SET_USER_FIELD_VALUE } from 'src/actions/user';

const initialState = {
  login: {
    email: 'TTT',
    password: 'VVV',
  },
  signup: {
    email: '',
    password: 'VVV',
    familyName: 'Toto',
    firstName: 'uhuh',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_FIELD_VALUE:
      return {
        ...state,
        login: {
          ...state.login,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};
