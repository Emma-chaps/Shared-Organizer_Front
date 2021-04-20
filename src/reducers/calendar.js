import { format } from 'date-fns';
import { SET_RANGE, SET_SELECTED_DATE_VALUE } from 'src/actions/calendar';

const initialState = {
  range: 'month',
  selectedDateValue: format(new Date(), 'yyyy-MM-dd'),
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RANGE:
      return {
        ...state,
        range: action.value,
      };
    case SET_SELECTED_DATE_VALUE:
      return {
        ...state,
        selectedDateValue: action.value,
      };
    default:
      return state;
  }
};
