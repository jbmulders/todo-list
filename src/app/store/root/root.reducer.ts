import {
  RootAction,
  rootStoreName,
  IRootState,
  ERootActionType,
} from './root.actions';
import { EAuthActionType } from '../auth/auth.actions';
import { IToastMessage } from '@model';
import { ETodoActionType } from '../todo';

export const reducers = {
  [rootStoreName]: rootReducer,
};

const initialState: IRootState = {
  user: null,
  isLoggedIn: false,
  message: null,
};

const loginMessage: IToastMessage = {
  message: 'You are logged in!',
};

const logoutMessage: IToastMessage = {
  message: 'You are logged out',
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
        message: loginMessage,
      };

    case EAuthActionType.logoutSuccess:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        message: logoutMessage,
      };

    case ERootActionType.showToast:
      return {
        ...state,
        message: action.payload.message,
      };

    case EAuthActionType.loginError:
      return {
        ...state,
        message: action.payload.error,
      };

    case ETodoActionType.getListError:
      return {
        ...state,
        message: action.payload.error,
      };

    case ETodoActionType.setSelectedToNewTodoError:
      return {
        ...state,
        message: action.payload.error,
      };

    case ETodoActionType.saveTodoError:
      return {
        ...state,
        message: action.payload.error,
      };

    case ETodoActionType.saveTodoSuccess: {
      return {
        ...state,
        message: { message: 'Item saved!' },
      };
    }

    default:
      return state;
  }
}
