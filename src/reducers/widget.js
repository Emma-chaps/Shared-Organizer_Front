import {
  SET_WIDGET_FIELD_VALUE,
  SET_WIDGET_TO_DASHBOARD,
  SET_WIDGET_DESCRIPTION_VALUE,
  ASSIGN_MEMBER_TO_WIDGET,
  SHOW_CREATION_WIDGET_MODAL,
  HIDE_WIDGET_CREATION_MODAL,
  REINITIALIZE_WIDGET,
  SET_WIDGET_TO_STATE,
  SET_DAY_WIDGETS_OF_RANGE,
  SET_WEEKLY_WIDETS,
  SET_MONTLY_WIDETS,
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
  dailyWidgets: [],
  monthlyWidgets: [],
  weeklyWidgets: [],
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
    case SET_DAY_WIDGETS_OF_RANGE: {
      return {
        ...state,
        dailyWidgets: action.widgets,
      };
    }
    case SET_MONTLY_WIDETS: {
      return {
        ...state,
        monthlyWidgets: action.widgets,
      };
    }
    case SET_WEEKLY_WIDETS: {
      return {
        ...state,
        weeklyWidgets: action.widgets,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        dashboardWidgets: [],
        dailyWidgets: [],
      };
    }

    default:
      return state;
  }
};
