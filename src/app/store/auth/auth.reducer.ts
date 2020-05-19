import { IAuthState, EAuthActionType, AuthAction } from './auth.actions';

const initialState: IAuthState = {
  isLoggedIn: null,
  user: null,
  loggingIn: true,
};

export function authReducer(
  state = initialState,
  action: AuthAction
): IAuthState {
  switch (action.type) {
    case EAuthActionType.login:
      return {
        ...state,
        loggingIn: true,
      };

    case EAuthActionType.logout:
      return {
        ...state,
        loggingIn: true,
      };

    case EAuthActionType.loginSuccess:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        loggingIn: false,
      };

    case EAuthActionType.logoutSuccess:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loggingIn: false,
      };

    case EAuthActionType.loginError || EAuthActionType.logoutError:
      return {
        ...state,
        loggingIn: false,
      };

    default:
      return state;
  }
}
