import { createReducer, on, State } from "@ngrx/store";
import { ToDoActions } from "./app.actions";
import { initialState } from "./app.state";
import { v4 as uuidv4 } from "uuid";

export const appReducer = createReducer(
  initialState,
  on(ToDoActions.getToDosSuccess, (state, { toDos }) => ({ ...state, loading: false, toDos })),
  on(ToDoActions.addToDoSuccess, (state, { toDo }) => ({
    ...state,
    loading: false,
    toDos: [...state.toDos, toDo],
  })),
  
  // TODO: Create reducer here to listen for ToDoActions.editToDoSuccess

  on(ToDoActions.deleteToDoSuccess, (state, { toDo }) => ({
    ...state,
    loading: false,
    toDos: state.toDos.filter((t) => t.id !== toDo.id),
  })),
  on(ToDoActions.toggleCompletedSuccess, (state, { toDo }) => ({
    ...state,
    loading: false,
    toDos: state.toDos.map((t) => {
      if (t.id === toDo.id) {
        if (toDo.completed)
          return { ...t, completed: false, completedOn: undefined };
        else return { ...t, completed: true, completedOn: new Date() };
      } else return t;
    }),
  }))
);
