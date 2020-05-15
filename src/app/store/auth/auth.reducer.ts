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
        loginError: null,
      };

    case EAuthActionType.loginError:
      return {
        ...state,
        loginError: action.payload.error,
      };

    default:
      return state;
  }
}
