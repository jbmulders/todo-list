import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ETodoActionType,
  GetList,
  GetListError,
  GetListSuccess,
  SaveTodo,
  SaveTodoSuccess,
  SetSelectedNewTodoSuccess,
  SetSelectedNewTodoError,
  SetSelectedTodo,
} from './todo.actions';
import { TodoService } from 'app/todo/todo-service/todo.service';
import { RootFacade } from '../root/root.facade';
import { TodoFacade } from './todo.facade';

@Injectable()
export class TodoEffects {
  constructor(
    private todoService: TodoService,
    private rootFacade: RootFacade,
    private todoFacade: TodoFacade,
    private actions$: Actions
  ) {}

  @Effect()
  loadTodos$: Observable<Action> = this.actions$.pipe(
    ofType(ETodoActionType.getList),
    mergeMap((action: GetList) =>
      this.rootFacade.user$.pipe(
        mergeMap((user) =>
          this.todoService
            .loadTodosForUser(user.uid)
            .pipe(map((list) => new GetListSuccess({ list })))
        )
      )
    ),
    catchError((error) =>
      of(
        new GetListError({
          error: { message: error.message, code: error.code },
        })
      )
    )
  );

  @Effect()
  saveTodo$: Observable<Action> = this.actions$.pipe(
    ofType(ETodoActionType.saveTodo),
    mergeMap((action: SaveTodo) =>
      this.todoService
        .saveTodo(action.payload.todo)
        .pipe(map(() => new SaveTodoSuccess()))
    ),
    catchError((error) =>
      of(
        new GetListError({
          error: { message: error.message, code: error.code },
        })
      )
    )
  );

  @Effect()
  setNewTodo$: Observable<Action> = this.actions$.pipe(
    ofType(ETodoActionType.setSelectedToNewTodo),
    mergeMap((action: SetSelectedTodo) =>
      this.todoFacade
        .initNewTodo()
        .pipe(map((todo) => new SetSelectedNewTodoSuccess({ todo })))
    ),
    catchError((error) =>
      of(
        new SetSelectedNewTodoError({
          error: { message: error.message, code: error.code },
        })
      )
    )
  );
}
