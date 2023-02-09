import { ToDo } from "../models/todo.model";

export const APP_KEY = 'app';

export interface AppState {
  loading: boolean;
  toDos: ToDo[];
}

export const initialState: AppState = {
  loading: false,
  toDos: [],
}