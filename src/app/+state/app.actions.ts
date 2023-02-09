import { createAction, props } from "@ngrx/store";
import { ToDo } from "../models/todo.model";

const getToDos = createAction('[TODO] Get todos');
const getToDosSuccess = createAction('[TODO] Get todos success', props<{ toDos: ToDo[] }>());
const addToDo = createAction('[TODO] Add todo');
const addToDoSuccess = createAction('[TODO] Add todo success', props<{ toDo: ToDo }>());
const editToDo = createAction('[TODO] Edit todo', props<{ toDo: ToDo }>());
const editToDoSuccess = createAction('[TODO] Edit todo success', props<{ toDo: ToDo }>());
const deleteToDo = createAction('[TODO] Delete todo', props<{ toDo: ToDo }>());
const deleteToDoSuccess = createAction('[TODO] Delete todo success', props<{ toDo: ToDo }>());
const toggleCompleted = createAction('[TODO] Toggle completed', props<{ toDo: ToDo }>());
const toggleCompletedSuccess = createAction('[TODO] Toggle completed success', props<{ toDo: ToDo }>());

export const ToDoActions = {
  getToDos,
  addToDo,
  editToDo,
  deleteToDo,
  getToDosSuccess,
  addToDoSuccess,
  editToDoSuccess,
  deleteToDoSuccess,
  toggleCompleted,
  toggleCompletedSuccess
}