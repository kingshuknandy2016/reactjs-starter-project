import { combineReducers } from 'redux';
import ToDoTaskReducer from './ToDoTaskReducer';

const rootReducer = combineReducers({
  tasks: ToDoTaskReducer,
});

export default rootReducer;
