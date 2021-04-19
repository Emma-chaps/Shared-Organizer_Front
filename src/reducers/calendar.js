import { SET_RANGE } from 'src/actions/calendar';

const initialState = {
  range: '',
  date: {
    year: 2021,
    month: 5,
    day: 30,
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
