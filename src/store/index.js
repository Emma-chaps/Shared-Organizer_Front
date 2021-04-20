/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import ajaxMiddleware from 'src/middlewares/ajax';
import authMiddleware from 'src/middlewares/auth';
import widgetMiddleware from 'src/middlewares/createWidget';
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, ajaxMiddleware, widgetMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
