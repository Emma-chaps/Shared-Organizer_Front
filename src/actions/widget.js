export const SET_WIDGET_FIELD_VALUE = 'SET_WIDGET_FIELD_VALUE';

export const setWidgetFieldValue = (name, value) => ({
  type: SET_WIDGET_FIELD_VALUE,
  name,
  value,
});
