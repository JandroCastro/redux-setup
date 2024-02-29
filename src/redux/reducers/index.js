import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  // Otros reducers aquí si los tienes
});

export default rootReducer;
