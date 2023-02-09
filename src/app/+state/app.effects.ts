import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, EMPTY } from "rxjs";
import { ToDoDialogComponent } from "../components/todo-dialog/todo-dialog.component";
import { ToDo } from "../models/todo.model";
import { ToDoService } from "../services/to-do.service";
import { ToDoActions } from "./app.actions";

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private toDoService: ToDoService,
    private dialog: MatDialog
  ) {}

  getToDos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.getToDos),
      switchMap(() =>
        this.toDoService
          .getAll()
          .pipe(map((toDos) => ToDoActions.getToDosSuccess({ toDos })))
      )
    )
  );

  addToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.addToDo),
      switchMap(() =>
        this.dialog
          .open<ToDoDialogComponent, undefined, ToDo>(ToDoDialogComponent, {
            width: "500px",
            data: undefined,
            disableClose: true,
          })
          .afterClosed()
          .pipe(
            switchMap((toDo) =>
              toDo
                ? this.toDoService
                    .add(toDo)
                    .pipe(map((toDo) => ToDoActions.addToDoSuccess({ toDo })))
                : EMPTY
            )
          )
      )
    )
  );

  // TODO: Create effect here to listen for ToDoActions.editToDo

  deleteToDo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.deleteToDo),
      switchMap(({ toDo }) =>
        confirm("Are you sure?")
          ? this.toDoService
              .delete(toDo)
              .pipe(map(() => ToDoActions.deleteToDoSuccess({ toDo })))
          : EMPTY
      )
    )
  );

  toggleCompleted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ToDoActions.toggleCompleted),
      switchMap(({ toDo }) =>
        this.toDoService
          .edit(toDo)
          .pipe(map(() => ToDoActions.toggleCompletedSuccess({ toDo })))
      )
    )
  );
}
