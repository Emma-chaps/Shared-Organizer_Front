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
} from 'src/actions/settings';

const initialState = {
  openedGroupNameInput: false,
  openedModal: false,
  openMembersInput: {},
  group: {
    groupName: '',
    members: [],
  },
  memberToChange: {
    id: '',
    email: '',
    firstname: '',
    password: '',
    icon: '',
    role: '',
  },
  groupNameToChange: '',
  newMember: {
    email: '',
    firstname: '',
    password: '',
    icon: '',
    role: '',
  },
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
    default:
      return state;
  }
};
