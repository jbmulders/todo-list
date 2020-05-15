import { ITodoState } from './todo.actions';

const initialState: ITodoState = {
  list: [],
  selected: null,
};

export function todoReducer(state = initialState, action: any): ITodoState {
  switch (action.type) {
    default:
      return state;
  }
}
