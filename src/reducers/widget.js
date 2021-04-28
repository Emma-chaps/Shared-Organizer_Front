import {
  SET_WIDGET_FIELD_VALUE,
  SET_ALL_WIDGETS,
  SET_WIDGET_DESCRIPTION_VALUE,
  ASSIGN_MEMBER_TO_WIDGET,
  SHOW_CREATION_WIDGET_MODAL,
  HIDE_WIDGET_CREATION_MODAL,
  REINITIALIZE_WIDGET,
  SET_WIDGET_TO_STATE,
  SET_FILTERED_MEMBERS,
  COPY_WIDGET_TO_EDIT,
  REMOVE_MEMBER_FROM_WIDGET,
} from 'src/actions/widget';

import { findMember, removeGivenMember } from 'src/selectors/findMember';
import { LOGOUT } from 'src/actions/user';

const initialState = {
  displayCreationModal: false,
  widgetCreation: {
    id: '',
    title: '',
    description: '',
    groupMembers: [],
  },
  dashboardWidgets: [],
  filteredMembers: [],
  widgetToEdit: {},
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

    case REMOVE_MEMBER_FROM_WIDGET: {
      return {
        ...state,
        widgetCreation: {
          ...state.widgetCreation,
          groupMembers: removeGivenMember(action.id, action.members),
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
          id: '',
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

    case SET_FILTERED_MEMBERS: {
      return {
        ...state,
        filteredMembers: action.members,
      };
    }

    case COPY_WIDGET_TO_EDIT: {
      return {
        ...state,
        widgetCreation: {
          id: action.widget.id,
          title: action.widget.title,
          description: action.widget.description,
          groupMembers: action.members,
        },
      };
    }

    default:
      return state;
  }
};
