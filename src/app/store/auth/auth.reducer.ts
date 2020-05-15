import {
  IAuthState,
  EAuthActionType,
  AuthAction,
  LoginSuccess,
} from './auth.actions';

const initialState: IAuthState = {
  isLoggedIn: false,
  user: null,
  loginError: null,
};

export function authReducer(
  state = initialState,
  action: AuthAction
): IAuthState {
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
