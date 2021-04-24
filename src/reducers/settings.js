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
  ASSIGN_MEMBER_TO_CLOSE_INPUT_VIEW,
  HIDE_MODAL,
  SET_IS_OPENED_MODAL,
  SET_SELECTED_ICON,
  SET_SELECTED_ROLE,
  CLEAN_MEMBER_TO_CHANGE_FIELD,
  SET_COLOR_TO_MEMBER,
  SET_USABLE_COLORS,
  MAKE_AVAILABLE_COLOR,
} from 'src/actions/settings';

import { deleteColor, updateColors, AddColor } from 'src/selectors/utils';

const initialState = {
  openedGroupNameInput: false,
  openedModal: false,
  openMembersInput: {},
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
    icon: '',
    role: '',
  },
  newMember: {
    email: '',
    firstname: '',
    password: '',
    icon: '',
    role: '',
  },
  colors: [
    { name: 'red', value: 'Red' },
    { name: 'yellow', value: 'Yellow' },
    { name: 'green', value: 'Green' },
    { name: 'blue', value: 'Blue' },
    { name: 'brown', value: 'Brown' },
    { name: 'purple', value: 'Purple' },
  ],
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
          id: action.member.id,
          email: action.member.email,
          password: '',
          firstname: action.member.firstname,
          icon: action.member.icon,
          role: action.member.role,
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
          // ...state.openMembersInput,
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
    case ASSIGN_MEMBER_TO_CLOSE_INPUT_VIEW: {
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
    case SET_SELECTED_ICON: {
      return {
        ...state,
        memberToChange: {
          ...state.memberToChange,
          icon: action.icon,
        },
      };
    }
    case SET_SELECTED_ROLE: {
      return {
        ...state,
        memberToChange: {
          ...state.memberToChange,
          role: action.role,
        },
      };
    }
    case CLEAN_MEMBER_TO_CHANGE_FIELD: {
      return {
        ...state,
        openMembersInput: {},
        memberToChange: {
          ...state.memberToChange,
          id: '',
          email: '',
          firstname: '',
          password: '',
          icon: '',
          role: '',
        },
      };
    }
    case SET_COLOR_TO_MEMBER: {
      return {
        ...state,
        colors: deleteColor(state.colors, action.color),
      };
    }
    case SET_USABLE_COLORS: {
      return {
        ...state,
        colors: updateColors(
          state.group.members,
          state.colors,
          state.memberToChange.icon
        ),
      };
    }
    default:
      return state;
  }
};
