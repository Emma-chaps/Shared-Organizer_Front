import { SET_WIDGET_FIELD_VALUE } from 'src/actions/widget';

const initialState = {
  widgetCreation: {
    title: '',
    description: '',
    familyMembers: [],
    label: '',
    date: '',
    listSyle: '',
    fields: [],
  },
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
    default:
      return state;
  }
};
