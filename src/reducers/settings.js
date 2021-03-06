import {
  SET_GROUP_NAME_INPUT_STATE,
  SET_NEW_GROUP_NAME_FIELD_VALUE,
  SET_MEMBER_TO_CHANGE_FIELD_VALUE,
  COPY_MEMBER,
  SET_GROUP_NAME,
  COPY_GROUP_NAME,
  SET_GROUP_DATA,
  ASSIGN_MEMBER_TO_OPEN_INPUT_VIEW,
  SET_MEMBERS_TO_EDIT,
  HIDE_MODAL,
  SET_IS_OPENED_MODAL,
  SET_SELECTED_COLOR,
  SET_SELECTED_ROLE,
  CLEAN_NEW_MEMBER_FIELDS,
  SET_COLOR_TO_MEMBER,
  SET_USABLE_COLORS,
  CLOSE_ALL_INPUT,
  SET_USABLE_COLORS_TO_ADD_MEMBER,
  HIDE_ALERT_MODAL,
  SET_IS_OPENED_ALERT_MODAL,
  CLEAN_PASSWORD_FIELD,
  SET_IS_OPEN_MEMBER_PASSWORD_MODAL,
  CLOSE_MEMBER_PASSWORD_MODAL,
  SET_IS_OPEN_MEMBER_DELETE_MODAL,
  CLOSE_MEMBER_DELETE_MODAL,
  SET_UPDATE_USER_ERROR_MESSAGE,
  SET_ADD_USER_ERROR_MESSAGE,
} from 'src/actions/settings';

import { deleteColor, updateColors, closeInput } from 'src/selectors/utils';

const initialState = {
  openedGroupNameInput: false,
  openedModal: false,
  openedAlertModal: false,
  openMembersInput: {},
  isOpenedMemberPasswordModal: {},
  isOpenedMemberDeleteModal: {},
  group: {
    groupName: '',
    members: [],
  },
  groupNameToChange: '',
  memberToChange: {
    id: '',
    email: '',
    firstname: '',
    password: '',
    color: '',
    role: '',
    userError: '',
  },
  newMember: {
    email: '',
    firstname: '',
    password: '',
    color: '',
    role: '',
    userError: '',
  },
  colors: [
    { name: 'dark', value: 'Dark' },
    { name: 'light-blue', value: 'Light Blue' },
    { name: 'green', value: 'Green' },
    { name: 'light-grey', value: 'Light Grey' },
  ],
  usableColors: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_GROUP_NAME_FIELD_VALUE: {
      return {
        ...state,
        groupNameToChange: action.value,
      };
    }
    case SET_MEMBER_TO_CHANGE_FIELD_VALUE: {
      return {
        ...state,
        memberToChange: {
          ...state.memberToChange,
          [action.name]: action.value,
        },
      };
    }
    case COPY_MEMBER: {
      return {
        ...state,
        memberToChange: {
          ...state.memberToChange,
          ...action.member,
          userError: '',
        },
      };
    }
    case SET_GROUP_NAME: {
      return {
        ...state,
        group: {
          ...state.group,
          groupName: state.groupNameToChange,
        },
      };
    }
    case COPY_GROUP_NAME: {
      return {
        ...state,
        groupNameToChange: action.groupName,
      };
    }
    case SET_GROUP_NAME_INPUT_STATE: {
      return {
        ...state,
        openedGroupNameInput: !state.openedGroupNameInput,
      };
    }
    case SET_GROUP_DATA: {
      return {
        ...state,
        group: {
          ...state.group,
          groupName: action.name,
          members: action.members,
        },
      };
    }
    case ASSIGN_MEMBER_TO_OPEN_INPUT_VIEW: {
      return {
        ...state,
        openMembersInput: {
          ...state.openMembersInput,
          [action.id]: true,
        },
      };
    }
    case SET_MEMBERS_TO_EDIT: {
      return {
        ...state,
        openMembersInput: {
          ...state.openMembersInput,
          [action.id]: false,
        },
      };
    }
    case SET_IS_OPENED_MODAL: {
      return {
        ...state,
        openedModal: true,
      };
    }
    case HIDE_MODAL: {
      return {
        ...state,
        openedModal: false,
      };
    }
    case SET_SELECTED_COLOR: {
      return {
        ...state,
        memberToChange: {
          ...state.memberToChange,
          color: action.color,
        },
      };
    }
    case SET_SELECTED_ROLE: {
      return {
        ...state,
        memberToChange: {
          ...state.memberToChange,
          role: Number(action.role),
        },
      };
    }
    case CLEAN_NEW_MEMBER_FIELDS: {
      return {
        ...state,
        newMember: {
          ...state.memberToChange,
          email: '',
          firstname: '',
          password: '',
          color: '',
          role: '',
          userError: '',
        },
      };
    }
    case SET_COLOR_TO_MEMBER: {
      return {
        ...state,
        usableColors: deleteColor(state.colors, action.color),
      };
    }
    case SET_USABLE_COLORS: {
      return {
        ...state,
        usableColors: updateColors(
          state.group.members,
          state.colors,
          state.memberToChange.color
        ),
      };
    }
    case CLOSE_ALL_INPUT: {
      return {
        ...state,
        openMembersInput: closeInput(state.group.members),
      };
    }
    case SET_USABLE_COLORS_TO_ADD_MEMBER: {
      return {
        ...state,
        usableColors: updateColors(
          state.group.members,
          state.colors,
          state.newMember.color
        ),
      };
    }
    case HIDE_ALERT_MODAL: {
      return {
        ...state,
        openedAlertModal: false,
      };
    }
    case SET_IS_OPENED_ALERT_MODAL: {
      return {
        ...state,
        openedAlertModal: true,
      };
    }
    case CLEAN_PASSWORD_FIELD: {
      return {
        ...state,
        memberToChange: {
          ...state.memberToChange,
          password: '',
        },
      };
    }
    case SET_IS_OPEN_MEMBER_PASSWORD_MODAL: {
      return {
        ...state,
        isOpenedMemberPasswordModal: {
          ...state.isOpenedMemberPasswordModal,
          [action.id]: true,
        },
      };
    }
    case CLOSE_MEMBER_PASSWORD_MODAL: {
      return {
        ...state,
        isOpenedMemberPasswordModal: {},
      };
    }
    case SET_IS_OPEN_MEMBER_DELETE_MODAL: {
      return {
        ...state,
        isOpenedMemberDeleteModal: {
          ...state.isOpenedMemberDeleteModal,
          [action.id]: true,
        },
      };
    }
    case CLOSE_MEMBER_DELETE_MODAL: {
      return {
        ...state,
        isOpenedMemberDeleteModal: {},
      };
    }
    case SET_UPDATE_USER_ERROR_MESSAGE: {
      return {
        ...state,
        memberToChange: {
          ...state.memberToChange,
          userError: action.error,
        },
      };
    }
    case SET_ADD_USER_ERROR_MESSAGE: {
      return {
        ...state,
        newMember: {
          ...state.newMember,
          userError: action.error,
        },
      };
    }
    default:
      return state;
  }
};
