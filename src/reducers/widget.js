import {
  SET_WIDGET_FIELD_VALUE,
  SET_WIDGET_TO_DASHBOARD,
  SET_WIDGET_DESCRIPTION_VALUE,
} from 'src/actions/widget';

const initialState = {
  widgetCreation: {
    title: '',
    description: '',
    selectedDate: '',
    familyMembers: [],
    periodicity: '',
  },
  dashboardWidgets: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WIDGET_FIELD_VALUE:
      return {
        ...state,
        widgetCreation: {
          ...state.widgetCreation,
          [action.name]: action.value,
        },
      };

    case SET_WIDGET_DESCRIPTION_VALUE:
      return {
        ...state,
        widgetCreation: {
          ...state.widgetCreation,
          description: action.value,
        },
      };

    case SET_WIDGET_TO_DASHBOARD:
      return {
        ...state,
        dashboardWidgets: [
          ...state.dashboardWidgets,
          {
            widget: action.widget,
            fields: action.fields,
          },
        ],
      };
    default:
      return state;
  }
};
