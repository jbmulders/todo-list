// export function (state, action)
import { IAuthState } from './auth.types';

const initialState: IAuthState = {
  isLoggedIn: false,
};

export function authReducer(state = initialState, action: any): IAuthState {
  switch (action.type) {
    default:
      return state;
  }
}
