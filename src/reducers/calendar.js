import { SET_RANGE } from 'src/actions/calendar';

const initialState = {
  range: '',
  date: {
    year: 2022,
    month: 11,
    day: 8,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RANGE:
      return {
        ...state,
        range: action.value,
      };
    default:
      return state;
  }
};
