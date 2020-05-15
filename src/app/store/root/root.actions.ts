import { authStoreName } from '@store';
import { IAuthState, AuthAction } from '../auth';
import { TodoAction } from '../todo';

export const rootStoreName = 'root';

export interface IState {
  [rootStoreName]: IRootState;
  [authStoreName]: IAuthState;
}

export interface IRootState {
  user: firebase.UserInfo;
  isLoggedIn: boolean;
}

export type RootAction = AuthAction | TodoAction;
