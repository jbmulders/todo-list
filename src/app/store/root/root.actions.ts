import { IAuthState, AuthAction, authStoreName } from '../auth/auth.actions';
import { TodoAction } from '../todo/todo.actions';
import { IToastMessage } from '@model';
import { Action } from '@ngrx/store';

export const rootStoreName = 'root';

export interface IState {
  [rootStoreName]: IRootState;
  [authStoreName]: IAuthState;
}

export interface IRootState {
  user: firebase.UserInfo;
  isLoggedIn: boolean;
  message: IToastMessage;
}

export enum ERootActionType {
  showToast = '[ROOT] show toast',
}

export class ShowToast implements Action {
  readonly type = ERootActionType.showToast;

  constructor(public payload: { message: IToastMessage }) {}
}

export type RootAction = AuthAction | TodoAction | ShowToast;
