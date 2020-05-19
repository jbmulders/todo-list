import { ITodoState, ETodoActionType, TodoAction } from './todo.actions';

const initialState: ITodoState = {
  list: [],
  selected: null,
  isNew: null,
  loading: null,
};

export function todoReducer(
  state = initialState,
  action: TodoAction
): ITodoState {
  switch (action.type) {
    case ETodoActionType.getList:
      return {
        ...state,
        loading: true,
      };

    case ETodoActionType.getListSuccess:
      return {
        ...state,
        list: action.payload.list,
        loading: false,
      };

    case ETodoActionType.getListError:
      return {
        ...state,
        loading: false,
      };

    case ETodoActionType.setSelectedTodo:
      return {
        ...state,
        isNew: false,
        selected: action.payload.todo,
      };

    case ETodoActionType.setSelectedToNewTodoSuccess:
      return {
        ...state,
        isNew: true,
        selected: action.payload.todo,
      };

    default:
      return state;
  }
}
