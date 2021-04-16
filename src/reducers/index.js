import { combineReducers } from 'redux';

import userReducer from './user';
import widgetReducer from './widget';

const rootReducer = combineReducers({
  user: userReducer,
  widget: widgetReducer,
});

export default rootReducer;
