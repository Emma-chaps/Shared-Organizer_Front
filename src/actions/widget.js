export const SET_WIDGET_FIELD_VALUE = 'SET_WIDGET_FIELD_VALUE';

export const setWidgetFieldValue = (name, value) => ({
  type: SET_WIDGET_FIELD_VALUE,
  name,
  value,
});

export const SET_WIDGET_DESCRIPTION_VALUE = 'SET_WIDGET_DESCRIPTION_VALUE';

export const setWidgetDescriptionValue = (value) => ({
  type: SET_WIDGET_DESCRIPTION_VALUE,
  value,
});

export const SUBMIT_WIDGET_DATA_CREATION = 'SUBMIT_WIDGET_DATA_CREATION';

export const submitWidgetDataCreation = () => ({
  type: SUBMIT_WIDGET_DATA_CREATION,
});

export const SET_WIDGET_TO_DASHBOARD = 'SET_WIDGET_TO_DASHBOARD';

export const setWidgetToDashboard = (widget, fields) => ({
  type: SET_WIDGET_TO_DASHBOARD,
  widget,
  fields,
});

export const ASSIGN_MEMBER_TO_WIDGET = 'ASSIGN_MEMBER_TO_WIDGET';

export const assignMemberToWidget = (id, members) => ({
  type: ASSIGN_MEMBER_TO_WIDGET,
  id,
  members,
});

export const SHOW_CREATION_WIDGET_MODAL = 'SHOW_CREATION_WIDGET_MODAL';

export const showWidgetCreationModal = () => ({
  type: SHOW_CREATION_WIDGET_MODAL,
});

export const HIDE_WIDGET_CREATION_MODAL = 'HIDE_WIDGET_CREATION_MODAL';

export const hideWidgetCreationModal = () => ({
  type: HIDE_WIDGET_CREATION_MODAL,
});

export const SET_WIDGET_TO_STATE = 'SET_WIDGET_TO_STATE';

export const setWidgetToState = (widget) => ({
  type: SET_WIDGET_TO_STATE,
  widget,
});

export const REINITIALIZE_WIDGET = 'REINITIALIZE_WIDGET';

export const reinitializeWidget = () => ({
  type: REINITIALIZE_WIDGET,
});

export const FETCH_DAY_WIDGETS_OF_RANGE = 'FETCH_DAY_WIDGETS_OF_RANGE';

export const fetchDayWidgetsOfRange = () => ({
  type: FETCH_DAY_WIDGETS_OF_RANGE,
});

export const SET_DAY_WIDGETS_OF_RANGE = 'SET_DAY_WIDGETS_OF_RANGE';

export const setDayWidgetsOfRange = (widgets) => ({
  type: SET_DAY_WIDGETS_OF_RANGE,
  widgets,
});
