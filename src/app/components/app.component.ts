import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { ToDoActions } from "../+state/app.actions";
import { ToDoSelectors } from "../+state/app.selectors";
import { ToDo, CompletedToDo } from "../models/todo.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  todos$ = this.store.select(ToDoSelectors.toDos);

  constructor(public store: Store) {
    this.store.dispatch(ToDoActions.getToDos());
  }

  onAdd() {
    this.store.dispatch(ToDoActions.addToDo());
  }

  onEdit(toDo: ToDo) {
    // TODO: Dispatch an action to edit the todo
  }

  onDelete(toDo: ToDo) {
    this.store.dispatch(ToDoActions.deleteToDo({ toDo }));
  }

  onToggleCompleted(toDo: ToDo) {
    this.store.dispatch(ToDoActions.toggleCompleted({ toDo }));
  }

}
