import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoReducer from './todoReducer.js';

let redusers = combineReducers({
  todoReducer: todoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);

export default store;
