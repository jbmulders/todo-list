import { Action } from '@ngrx/store';
import { ITodo, IError } from '@model';

export const todoStoreName = 'todo';

export interface ITodoState {
  list: ITodo[];
  selected: ITodo;
  isNew: boolean;
}

export enum ETodoActionType {
  getList = '[TODO] get todo item list',
  getListSuccess = '[TODO] get todo item list success',
  getListError = '[TODO] get todo item list error',
  initNewTodo = '[TODO] init new todo item',
  saveTodo = '[TODO] save todo item',
  saveTodoSuccess = '[TODO] save todo item success',
  saveTodoError = '[TODO] save todo item error',
  setSelectedTodo = '[TODO] set selected todo',
  setSelectedToNewTodo = '[TODO] show new todo item',
  setSelectedToNewTodoSuccess = '[TODO] show new todo item success',
  setSelectedToNewTodoError = '[TODO] show new todo item error',
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
  constructor(public payload: { error: IError }) {}
}

export class SaveTodoSuccess implements Action {
  readonly type = ETodoActionType.saveTodoSuccess;
}

export class SetSelectedTodo implements Action {
  readonly type = ETodoActionType.setSelectedTodo;
  constructor(public payload: { todo: ITodo }) {}
}

export class SetSelectedNewTodo implements Action {
  readonly type = ETodoActionType.setSelectedToNewTodo;
}

export class SetSelectedNewTodoError implements Action {
  readonly type = ETodoActionType.setSelectedToNewTodoError;
  constructor(public payload: { error: IError }) {}
}

export class SetSelectedNewTodoSuccess implements Action {
  readonly type = ETodoActionType.setSelectedToNewTodoSuccess;
  constructor(public payload: { todo: ITodo }) {}
}

export type TodoAction =
  | GetList
  | GetListSuccess
  | GetListError
  | SaveTodo
  | SaveTodoError
  | SaveTodoSuccess
  | SetSelectedTodo
  | SetSelectedNewTodo
  | SetSelectedNewTodoError
  | SetSelectedNewTodoSuccess;
