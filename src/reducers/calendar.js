import { format } from 'date-fns';
import {
  UPDATE_DAY_INFOS,
  SET_RANGE,
  SET_SELECTED_DATE_VALUE,
  RESET_CALENDAR_DATA,
} from 'src/actions/calendar';

const initialState = {
  range: 'month',
  selectedDateValue: format(new Date(), 'yyyy-MM-dd'),
  dayInfos: {
    event: {},
    birth: {},
    death: {},
  },
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

    case UPDATE_DAY_INFOS:
      return {
        ...state,
        dayInfos: {
          ...state.dayInfos,
          event: { ...action.event },
          birth: { ...action.birth },
          death: { ...action.death },
        },
      };
    case RESET_CALENDAR_DATA:
      return {
        ...state,
        range: 'month',
        selectedDateValue: format(new Date(), 'yyyy-MM-dd'),
      };
    default:
      return state;
  }
};
