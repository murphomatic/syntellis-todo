import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
import { delay, Observable, of, Subject } from "rxjs";
import { ToDo } from "../models/todo.model";

@Injectable({ providedIn: "root" })
export class ToDoService {
  private simulatedLatency = 50;
  private todoDB: ToDo[] = [
    {
      id: uuidv4(),
      title: "Learn Angular",
      description: "Learn the latest about Angular 15",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Learn RxJS",
      description: "Get familiar with how Observable streams work.",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Learn NgRx",
      description: "Learn the Redux pattern in Angular",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Learn NgRx Effects",
      description: "Understand how Side-effects are handled in NgRx.",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Learn NgRx Store",
      description: "Understand how immutable state works",
      completed: true,
      completedOn: new Date(),
    },
  ];

  edit(toDo: ToDo): Observable<ToDo> {
    const target = this.todoDB.find((t) => t.id === toDo.id);
    if (!target) throw new Error("ToDo not found");
    this.todoDB.splice(this.todoDB.indexOf(target), 1, toDo);

    return of({...toDo}).pipe(delay(this.simulatedLatency));
  }

  add(toDo: ToDo): Observable<ToDo> {
    const newToDo = { ...toDo, id: uuidv4() };
    this.todoDB.push(newToDo);
    return of(newToDo).pipe(delay(this.simulatedLatency));
  }

  delete(toDo: ToDo): Observable<ToDo> {
    if (this.todoDB.findIndex((t) => t.id === toDo.id) > -1) {
      this.todoDB = this.todoDB.filter((t) => t.id !== toDo.id);
      return of({...toDo}).pipe(delay(this.simulatedLatency));
    } else throw new Error("ToDo not found");
  }

  getAll(): Observable<ToDo[]> {
    return of([...this.todoDB]).pipe(delay(this.simulatedLatency));
  }


}
