import { ToDoProp } from '../../features/ToDo/ToDoItem';

export enum ToDoActions {
  ADD_TASK = 'ADD_TASK',
  DELETE_TASK = 'DELETE_TASK',
  UPDATE_TASK = 'UPDATE_TASK',
}
export const addTodo = (text: string) => {
  return {
    type: ToDoActions.ADD_TASK,
    payload: {
      id: new Date().getTime(),
      text: text,
    } as ToDoProp,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: ToDoActions.DELETE_TASK,
    payload: id,
  };
};

export const updateToDo = (text: string) => {
  return {
    type: ToDoActions.UPDATE_TASK,
    payload: text,
  };
};
