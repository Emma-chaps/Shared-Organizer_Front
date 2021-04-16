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
