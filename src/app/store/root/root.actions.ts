import { authStoreName } from '@store';
import { IAuthState } from '../auth';

export interface IState {
  [authStoreName]: IAuthState;
}
