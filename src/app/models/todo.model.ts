export interface ToDoBase {
  id: string;
  title: string;
  description?: string;
  completed: boolean; 
}

export interface CompletedToDo extends ToDoBase {
  completed: true;
  completedOn: Date;
}

export interface IncompleteToDo extends ToDoBase {
  completed: false;
}

export type ToDo = CompletedToDo | IncompleteToDo;

