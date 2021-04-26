import {
  SET_WIDGET_FIELD_VALUE,
  SET_ALL_WIDGETS,
  SET_WIDGET_DESCRIPTION_VALUE,
  ASSIGN_MEMBER_TO_WIDGET,
  SHOW_CREATION_WIDGET_MODAL,
  HIDE_WIDGET_CREATION_MODAL,
  REINITIALIZE_WIDGET,
  SET_WIDGET_TO_STATE,
} from 'src/actions/widget';

import { findMember } from 'src/selectors/findMember';
import { LOGOUT } from '../actions/user';

const initialState = {
  displayCreationModal: false,
  widgetCreation: {
    title: '',
    description: '',
    groupMembers: [],
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

    case SET_ALL_WIDGETS:
      return {
        ...state,
        dashboardWidgets: [...action.widgets],
      };

    case ASSIGN_MEMBER_TO_WIDGET: {
      return {
        ...state,
        widgetCreation: {
          ...state.widgetCreation,
          groupMembers: [
            ...state.widgetCreation.groupMembers,
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
    case REINITIALIZE_WIDGET: {
      return {
        ...state,
        widgetCreation: {
          ...state.widgetCreation,
          title: '',
          description: '',
          groupMembers: [],
        },
      };
    }
    case SET_WIDGET_TO_STATE: {
      return {
        ...state,
        dashboardWidgets: [...state.dashboardWidgets, action.widget],
      };
    }

    case LOGOUT: {
      return {
        ...state,
        dashboardWidgets: [],
      };
    }

    default:
      return state;
  }
};
