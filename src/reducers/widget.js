import {
  SET_WIDGET_FIELD_VALUE,
  SET_WIDGET_TO_DASHBOARD,
  SET_WIDGET_DESCRIPTION_VALUE,
  ASSIGN_MEMBER_TO_WIDGET,
  SHOW_CREATION_WIDGET_MODAL,
  HIDE_WIDGET_CREATION_MODAL,
} from 'src/actions/widget';

import { findMember } from 'src/selectors/findMember';

const initialState = {
  displayCreationModal: false,
  widgetCreation: {
    title: '',
    description: '',
    selectedDate: '',
    familyMembers: [],
    range: '',
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

    case ASSIGN_MEMBER_TO_WIDGET: {
      return {
        ...state,
        widgetCreation: {
          ...state.widgetCreation,
          familyMembers: [
            ...state.widgetCreation.familyMembers,
            findMember(action.id, action.members),
          ],
        },
      };
    }
    case SHOW_CREATION_WIDGET_MODAL: {
      return {
        ...state,
        displayCreationModal: true,
      };
    }
    case HIDE_WIDGET_CREATION_MODAL: {
      return {
        ...state,
        displayCreationModal: false,
      };
    }

    default:
      return state;
  }
};
