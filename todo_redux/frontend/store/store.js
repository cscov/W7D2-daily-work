import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import {receiveTodos, receiveTodo} from '../actions/todo_actions';
import logger from 'redux-logger';



let configureStore = ( preloadedState = {} ) => {
  let store = createStore(rootReducer, preloadedState = {}, applyMiddleware(logger));
  return store;
};


export default configureStore;
