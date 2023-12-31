import { applyMiddleware, createStore } from 'redux';
import taskReducer from './reducers/ToDoTaskReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
