import { ITodoState, ETodoActionType, TodoAction } from './todo.actions';

const initialState: ITodoState = {
  list: [],
  selected: null,
  isNew: null,
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
