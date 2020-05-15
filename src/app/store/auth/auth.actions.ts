import { Action } from '@ngrx/store';
import { ICredential } from '@model';
import { IError } from 'app/core/model/error';

export const authStoreName = 'auth';

export interface IAuthState {
  isLoggedIn: boolean;
  user: firebase.UserInfo;
  loginError: IError;
}

export enum EAuthActionType {
  login = '[AUTH] do login',
  loginSuccess = '[AUTH] login success',
  loginError = '[AUTH] login failed',
  logout = '[AUTH] do logout',
  logoutSuccess = '[AUTH] logout success',
  logoutError = '[AUTH] logout failed',
}

export class DoLogin implements Action {
  readonly type = EAuthActionType.login;

  constructor(public payload: { credentials: ICredential }) {}
}

export class LoginSuccess implements Action {
  readonly type = EAuthActionType.loginSuccess;

  constructor(public payload: { user: firebase.UserInfo }) {}
}

export class LoginError implements Action {
  readonly type = EAuthActionType.loginError;

  constructor(public payload: { error: IError }) {}
}

export class DoLogout implements Action {
  readonly type = EAuthActionType.logout;
}

export class LogoutSuccess implements Action {
  readonly type = EAuthActionType.logoutSuccess;
}

export type AuthAction =
  | DoLogin
  | DoLogout
  | LoginSuccess
  | LoginError
  | LogoutSuccess;
