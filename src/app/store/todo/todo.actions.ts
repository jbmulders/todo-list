import { Action } from '@ngrx/store';
import { ITodo } from '@model';

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

export class GetListAction implements Action {
  type = ETodoActionType.getList;
}

export class GetListActionSuccess implements Action {
  type = ETodoActionType.getListSuccess;
  constructor(public payload: { list: ITodo[] }) {}
}

export class GetListActionError implements Action {
  type = ETodoActionType.getListError;
  constructor(public payload: { error: string }) {}
}

export type TodoAction =
  | GetListAction
  | GetListActionSuccess
  | GetListActionError;
