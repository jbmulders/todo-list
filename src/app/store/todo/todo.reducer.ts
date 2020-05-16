import { ITodoState, ETodoActionType, TodoAction } from './todo.actions';

const initialState: ITodoState = {
  list: [],
  selected: null,
};

export function todoReducer(
  state = initialState,
  action: TodoAction
): ITodoState {
  switch (action.type) {
    case ETodoActionType.getListSuccess:
      return {
        ...state,
        list: action.payload.list,
      };

    default:
      return state;
  }
}
