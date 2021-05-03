export const SET_RANGE = 'SET_RANGE';

export const setRange = (value) => ({
  type: SET_RANGE,
  value,
});

export const SET_SELECTED_DATE_VALUE = 'SET_SELECTED_DATE_VALUE';

export const setSelectedDateValue = (value) => ({
  type: SET_SELECTED_DATE_VALUE,
  value,
});

export const GET_DAY_INFOS = 'GET_DAY_INFOS';

export const getDayInfos = () => ({
  type: GET_DAY_INFOS,
});

export const UPDATE_DAY_INFOS = 'UPDATE_DAY_INFOS';

export const updateDayInfos = (event, birth, death) => ({
  type: UPDATE_DAY_INFOS,
  event,
  birth,
  death,
});

export const RESET_CALENDAR_DATA = 'RESET_CALENDAR_DATA';

export const resetCalendarData = () => ({
  type: RESET_CALENDAR_DATA,
});
