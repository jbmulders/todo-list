import { Action } from '@ngrx/store';
import { ITodo, IError } from '@model';

export const todoStoreName = 'todo';

export interface ITodoState {
  list: ITodo[];
  selected: ITodo;
}

export enum ETodoActionType {
  getList = '[TODO] get todo item list',
  getListSuccess = '[TODO] get todo item list success',
  getListError = '[TODO] get todo item list error',
  initNewTodo = '[TODO] init new todo item',
  saveTodo = '[TODO] save todo item',
  saveTodoSuccess = '[TODO] save todo item success',
  saveTodoError = '[TODO] save todo item error',
}

export class GetList implements Action {
  readonly type = ETodoActionType.getList;
}

export class GetListSuccess implements Action {
  readonly type = ETodoActionType.getListSuccess;
  constructor(public payload: { list: ITodo[] }) {}
}

export class GetListError implements Action {
  readonly type = ETodoActionType.getListError;
  constructor(public payload: { error: IError }) {}
}

export class SaveTodo implements Action {
  readonly type = ETodoActionType.saveTodo;
  constructor(public payload: { todo: ITodo }) {}
}

export class SaveTodoError implements Action {
  readonly type = ETodoActionType.saveTodoError;
}

export class SaveTodoSuccess implements Action {
  readonly type = ETodoActionType.saveTodoSuccess;
}

export type TodoAction = GetList | GetListSuccess | GetListError;
