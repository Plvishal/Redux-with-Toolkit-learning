// const redux = require("redux");

import * as redux from 'redux';
import { combineReducers } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { noteReducer } from './reducers/noteReducers';
const result = combineReducers({
  todoReducer,
  noteReducer,
});

export const store = redux.createStore(result);
