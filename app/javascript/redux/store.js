import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingsReducer from './greetings/greetingsReducer';

const reducer = combineReducers({
  greetingsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
