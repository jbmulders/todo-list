import { ITodoState } from './todo.types';

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
