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
} from './todo.actions';
import { TodoService } from 'app/todo/todo-service/todo.service';
import { RootFacade } from '../root/root.facade';

@Injectable()
export class AuthEffects {
  constructor(
    private todoService: TodoService,
    private rootFacade: RootFacade,
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
}
