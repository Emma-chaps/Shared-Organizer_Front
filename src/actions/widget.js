export const SET_WIDGET_FIELD_VALUE = 'SET_WIDGET_FIELD_VALUE';

export const setWidgetFieldValue = (value) => ({
  type: SET_WIDGET_FIELD_VALUE,
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

export const REMOVE_MEMBER_FROM_WIDGET = 'REMOVE_MEMBER_FROM_WIDGET';

export const removeMemberFromWidget = (id, members) => ({
  type: REMOVE_MEMBER_FROM_WIDGET,
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

export const FETCH_ALL_WIDGETS = 'FETCH_ALL_WIDGETS';

export const fetchAllWidgets = () => ({
  type: FETCH_ALL_WIDGETS,
});

export const SET_ALL_WIDGETS = 'SET_ALL_WIDGETS';

export const setAllWidgets = (widgets) => ({
  type: SET_ALL_WIDGETS,
  widgets,
});

export const EDIT_WIDGET = 'EDIT_WIDGET';

export const editWidget = (widget) => ({
  type: EDIT_WIDGET,
  widget,
});

export const COPY_WIDGET_TO_EDIT = 'COPY_WIDGET_TO_EDIT';

export const copyWidgetToEdit = (widget, members) => ({
  type: COPY_WIDGET_TO_EDIT,
  widget,
  members,
});

export const DELETE_WIDGET = 'DELETE_WIDGET';

export const deleteWidget = (id) => ({
  type: DELETE_WIDGET,
  id,
});

export const SET_FILTERED_MEMBERS = 'SET_FILTERED_MEMBERS';

export const setFilteredMembers = (members) => ({
  type: SET_FILTERED_MEMBERS,
  members,
});

export const SET_WIDGET_TO_EDIT = 'SET_WIDGET_TO_EDIT';

export const setWidgetToEdit = (widget) => ({
  type: SET_WIDGET_TO_EDIT,
  widget,
});

export const SET_IS_SELECTED_MEMBER = 'SET_IS_SELECTED_MEMBER';

export const setIsSelectedMember = (id) => ({
  type: SET_IS_SELECTED_MEMBER,
  id,
});

export const REMOVE_SELECTED_MEMBER = 'REMOVE_SELECTED_MEMBER';

export const removeSelectedMember = (id) => ({
  type: REMOVE_SELECTED_MEMBER,
  id,
});
