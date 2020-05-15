import { RootAction, rootStoreName, IRootState } from './root.actions';
import { EAuthActionType } from '../auth';

export const reducers = {
  [rootStoreName]: rootReducer,
};

const initialState: IRootState = {
  user: null,
  isLoggedIn: false,
  message: null,
};

export function rootReducer(
  state = initialState,
  action: RootAction
): IRootState {
  switch (action.type) {
    case EAuthActionType.loginSuccess:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };

    case EAuthActionType.logoutSuccess:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
}
