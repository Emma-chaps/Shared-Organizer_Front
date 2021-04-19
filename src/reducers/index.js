import { combineReducers } from 'redux';

import userReducer from './user';
import widgetReducer from './widget';
import calendarReducer from './calendar';

const rootReducer = combineReducers({
  user: userReducer,
  widget: widgetReducer,
  calendar: calendarReducer,
});

export default rootReducer;
