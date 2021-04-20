import { SET_INPUT_STATE } from 'src/actions/settings';

const initialState = {
  openedInput: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_STATE: {
      return {
        ...state,
        openedInput: !state.openedInput,
      };
    }
    default:
      return state;
  }
};
