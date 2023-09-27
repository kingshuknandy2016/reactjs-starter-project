import { ToDoProp } from "../../components/ToDo/ToDoItem";

export interface StateInterface {
  tasks: ToDoProp[];
}

const tasks: ToDoProp[] = [];

const initialState: StateInterface = {
  tasks,
};

const taskReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(
          (task: ToDoProp) => task.id !== action.payload
        ),
      };

    //Need To Update the Logic
    case "UPDATE_TASK":
      alert(action.payload);
      // const specificTaskIndex = state.tasks.findIndex(
      //   (task: ToDoProp) => task.id === action.payload
      // );

      // state.tasks[specificTaskIndex].text = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default taskReducer;
