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
  SET_IS_SELECTED_MEMBER,
  REMOVE_SELECTED_MEMBER,
  UPDATE_SELECTED_MEMBER,
  CLEAN_SELECTED_MEMBERS,
  SET_ERROR_MESSAGE,
  OPEN_WIDGET_DELETE_MODAL,
  CLOSE_WIDGET_DELETE_MODAL,
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
    errorMessage: '',
  },
  dashboardWidgets: [],
  filteredMembers: [],
  widgetToEdit: {},
  isMemberSelected: {},
  isOpenedDeleteWidgetModal: {},
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_WIDGET_FIELD_VALUE: {
      return {
        ...state,
        widgetCreation: {
          ...state.widgetCreation,
          title: action.value,
        },
      };
    }

    case SET_WIDGET_DESCRIPTION_VALUE: {
      return {
        ...state,
        widgetCreation: {
          ...state.widgetCreation,
          description: action.value,
        },
      };
    }

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
        widgetCreation: {
          ...state.widgetCreation,
          errorMessage: action.message,
        },
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
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        widgetCreation: {
          ...state.widgetCreation,
          errorMessage: action.message,
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
    case SET_IS_SELECTED_MEMBER: {
      return {
        ...state,
        isMemberSelected: {
          ...state.isMemberSelected,
          [action.id]: true,
        },
      };
    }
    case REMOVE_SELECTED_MEMBER: {
      return {
        ...state,
        isMemberSelected: {
          ...state.isMemberSelected,
          [action.id]: false,
        },
      };
    }
    case UPDATE_SELECTED_MEMBER: {
      return {
        ...state,
        isMemberSelected: {
          ...state.isMemberSelected,
          [action.id]: true,
        },
      };
    }
    case CLEAN_SELECTED_MEMBERS: {
      return {
        ...state,
        isMemberSelected: {},
      };
    }
    case OPEN_WIDGET_DELETE_MODAL: {
      return {
        ...state,
        isOpenedDeleteWidgetModal: {
          [action.id]: true,
        },
      };
    }
    case CLOSE_WIDGET_DELETE_MODAL: {
      return {
        ...state,
        isOpenedDeleteWidgetModal: {},
      };
    }
    default:
      return state;
  }
};
