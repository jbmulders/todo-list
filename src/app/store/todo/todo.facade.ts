import { Injectable } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  Store,
  select,
} from '@ngrx/store';
import {
  todoStoreName,
  ITodoState,
  GetList,
  SetSelectedTodo,
  SetSelectedNewTodo,
} from './todo.actions';
import { ITodo } from '@model';
import { AngularFirestore } from '@angular/fire/firestore';
import { RootFacade } from '../root/root.facade';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SaveTodo } from './todo.actions';

const featureSelector = createFeatureSelector<ITodoState>(todoStoreName);
const getList = createSelector(featureSelector, (state) => state?.list);
const getSelected = createSelector(featureSelector, (state) => state?.selected);
const getIsNew = createSelector(featureSelector, (state) => state?.isNew);

@Injectable()
export class TodoFacade {
  todos$ = this.store.pipe(select(getList));
  selectedTodo$ = this.store.pipe(select(getSelected));
  isNew$ = this.store.pipe(select(getIsNew));

  constructor(
    private rootFacade: RootFacade,
    private store: Store<ITodoState>,
    private afFirestore: AngularFirestore
  ) {}

  handleLoadTodos() {
    this.store.dispatch(new GetList());
  }

  handleSaveTodo(todo: ITodo) {
    if (todo.createdOn === null) {
      todo.createdOn = Date.now();
    }
    this.store.dispatch(new SaveTodo({ todo }));
  }

  handleSelectTodo(todo?: ITodo) {
    todo
      ? this.store.dispatch(new SetSelectedTodo({ todo }))
      : this.store.dispatch(new SetSelectedNewTodo());
  }
  handleDoneChanged(todo: ITodo) {}

  initNewTodo(): Observable<ITodo> {
    return this.rootFacade.user$.pipe(
      map((user) => ({
        id: this.afFirestore.createId(),
        title: null,
        description: null,
        due: this.getNowFormatted(),
        createdOn: null,
        createdBy: user.uid,
        done: false,
        doneOn: null,
      }))
    );
  }

  private getNowFormatted(): string {
    return new Date().toISOString().split('T')[0];
  }
}
