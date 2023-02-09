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

  add() {
    this.store.dispatch(ToDoActions.addToDo());
  }

  edit(toDo: ToDo) {
    // TODO: Dispatch an action to edit the todo
  }

  delete(toDo: ToDo) {
    this.store.dispatch(ToDoActions.deleteToDo({ toDo }));
  }

  toggleCompleted(toDo: ToDo) {
    this.store.dispatch(ToDoActions.toggleCompleted({ toDo }));
  }

}
