import { combineReducers } from 'redux';

import userReducer from './user';
import widgetReducer from './widget';
import calendarReducer from './calendar';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  user: userReducer,
  widget: widgetReducer,
  calendar: calendarReducer,
  settings: settingsReducer,
});

export default rootReducer;
