import { Action } from '@ngrx/store';

export enum EAuthActionType {
  login = '[AUTH] do login',
  loginSuccess = '[AUTH] login success',
  loginError = '[AUTH] login failed',
  logout = '[AUTH] do logout',
  logoutSuccess = '[AUTH] logout success',
  logoutError = '[AUTH] logout failed',
}

export class DoLogin implements Action {
  type = EAuthActionType.login;
  constructor(public payload: { email: string; password: string }) {}
}

export class DoLogout implements Action {
  type = EAuthActionType.logout;
}

export type AuthAction = DoLogin | DoLogout;
