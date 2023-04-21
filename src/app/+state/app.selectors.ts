import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, APP_KEY } from "./app.state";

const featureSelector = createFeatureSelector<AppState>(APP_KEY);
const toDos = createSelector(featureSelector, state => state.toDos);
const loading = createSelector(featureSelector, state => state.loading);
export const ToDoSelectors = {
  toDos,
  loading
}