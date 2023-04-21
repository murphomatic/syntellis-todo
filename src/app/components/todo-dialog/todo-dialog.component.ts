import { Component, Inject, OnDestroy, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { ToDo } from "src/app/models/todo.model";

@Component({
  selector: "app-todo-dialog",
  templateUrl: "./todo-dialog.component.html",
  styleUrls: ["./todo-dialog.component.scss"],
})
export class ToDoDialogComponent implements OnDestroy {
  form = this.fb.group({
    id: this.fb.nonNullable.control<string>("", Validators.required),
    title: this.fb.nonNullable.control<string>("", Validators.required),
    description: this.fb.control<string | null>(null),
    completed: this.fb.nonNullable.control<boolean>(false),
    completedOn: this.fb.control<Date | undefined>({
      value: undefined,
      disabled: false,
    }),
  });
  private completedSub: Subscription;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<ToDoDialogComponent, ToDo | undefined>
  ) {
    let data: ToDo | undefined = inject(MAT_DIALOG_DATA);
    if (data) {
      this.form.patchValue(data);
    }
    else 
    {
      this.form.patchValue({
        id: "new-todo",
        title: "",
        description: "",
        completed: false,
      })
    }
    this.completedSub = this.form.controls.completed.valueChanges.subscribe(
      (completed) =>
        completed
          ? this.form.patchValue({ completedOn: new Date() })
          : undefined
    );
  }

  ngOnDestroy() {
    this.completedSub.unsubscribe();
  }
  onSave() {
    this.dialogRef.close({ ...this.form.value } as ToDo);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
