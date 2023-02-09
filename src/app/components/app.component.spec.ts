import { ComponentFixture, waitForAsync, TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { AppMaterialModule } from "../app-material.module";
import { AppNgrxModule } from "../app-ngrx.module";
import { AppComponent } from "./app.component";
import { ToDoActions } from "../+state/app.actions";
import { ToDoSelectors } from "../+state/app.selectors";
import { appReducer } from "../+state/app.reducer";

describe("The ToDo list app component", () => {
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store;
  let storeSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [AppNgrxModule, AppMaterialModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.debugElement.componentInstance;
    store = appComponent.store;
    fixture.detectChanges();
    storeSpy = spyOn(store, "dispatch");
  }));

  it("should get created without error", () => {
    expect(appComponent).toBeDefined();
    store.select(ToDoSelectors.toDos).subscribe((todos) => {
      expect(todos.length).toBe(5);
    });
  });

  it("should be able to dispatch an add action", () => {
    appComponent.add();
    expect(storeSpy).toHaveBeenCalledWith(ToDoActions.addToDo());
  });

  it("should be able to dispatch an edit action", () => {
    appComponent.edit({ id: "test-id", title: "test", completed: false });
    expect(storeSpy).toHaveBeenCalledWith(
      ToDoActions.editToDo({
        toDo: { id: "test-id", title: "test", completed: false },
      })
    );
  });

  it("should be able to dispatch a delete action", () => {
    appComponent.delete({ id: "test-id", title: "test", completed: false });
    expect(storeSpy).toHaveBeenCalledWith(
      ToDoActions.deleteToDo({
        toDo: { id: "test-id", title: "test", completed: false },
      })
    );
  });

  it("should be able to dispatch a toggle-completed action", () => {
    appComponent.toggleCompleted({
      id: "test-id",
      title: "test",
      completed: false,
    });
    expect(storeSpy).toHaveBeenCalledWith(
      ToDoActions.toggleCompleted({
        toDo: { id: "test-id", title: "test", completed: false },
      })
    );
  });

  it("should add a todo on dispatch of addToDoSuccess", waitForAsync(() => {
    let action = ToDoActions.addToDoSuccess({
      toDo: { id: "test-id", title: "test", completed: false },
    });
    store.select(ToDoSelectors.toDos).subscribe((toDos) => {
      expect(
        appReducer({ toDos, loading: false }, action).toDos.length
      ).toEqual(6);
    });
  }));

  it("should edit a todo on dispatch of editToDoSuccess", waitForAsync(() => {
    store.select(ToDoSelectors.toDos).subscribe((toDos) => {
      let action = ToDoActions.editToDoSuccess({
        toDo: { ...toDos[0], title: "New Title" },
      });
      let newState = appReducer({ toDos, loading: false }, action);
      expect(newState.toDos[0].title).toEqual("New Title");
      expect(newState.toDos.length).toEqual(5);
    });
  }));

  it("should delete a todo on dispatch of deleteToDoSuccess", waitForAsync(() => {
    store.select(ToDoSelectors.toDos).subscribe((toDos) => {
      let action = ToDoActions.deleteToDoSuccess({ toDo: { ...toDos[0] } });
      expect(
        appReducer({ toDos, loading: false }, action).toDos.length
      ).toEqual(4);
    });
  }));
});
