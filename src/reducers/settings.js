import {
  SET_INPUT_STATE,
  SET_NEW_GROUP_NAME_FIELD_VALUE,
  SET_MEMBER_TO_CHANGE_FIELD_VALUE,
  COPY_MEMBER,
  SET_GROUP_NAME,
  COPY_GROUP_NAME,
  SET_FAMILY_DATA,
} from 'src/actions/settings';

const initialState = {
  openedInput: false,
  family: {
    groupName: '',
    members: [],
  },
  memberToChange: {
    email: '',
    firstname: '',
    icon: '',
    role: '',
  },
  groupNameToChange: '',
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
        family: {
          ...state.family,
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
    case SET_INPUT_STATE: {
      return {
        ...state,
        openedInput: !state.openedInput,
      };
    }
    case SET_FAMILY_DATA: {
      return {
        ...state,
        family: {
          ...state.family,
          groupName: action.name,
          members: action.members,
        },
      };
    }
    default:
      return state;
  }
};
