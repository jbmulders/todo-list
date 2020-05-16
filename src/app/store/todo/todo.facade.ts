import { Injectable } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  Store,
  select,
} from '@ngrx/store';
import { todoStoreName, ITodoState, GetList } from './todo.actions';
import { ITodo } from '@model';
import { AngularFirestore } from '@angular/fire/firestore';
import { RootFacade } from '../root/root.facade';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SaveTodo } from './todo.actions';

const featureSelector = createFeatureSelector<ITodoState>(todoStoreName);
const getList = createSelector(featureSelector, (state) => state?.list);
const getSelected = createSelector(featureSelector, (state) => state?.selected);

@Injectable()
export class TodoFacade {
  todos$ = this.store.pipe(select(getList));
  selectedTodo$ = this.store.pipe(select(getSelected));

  constructor(
    private rootFacade: RootFacade,
    private store: Store<ITodoState>,
    private afFirestore: AngularFirestore
  ) {}

  handleLoadTodos() {
    this.store.dispatch(new GetList());
  }

  handleSaveTodo(todo: ITodo) {
    this.store.dispatch(new SaveTodo({ todo }));
  }

  initNewTodo(): Observable<ITodo> {
    return this.rootFacade.user$.pipe(
      map((user) => ({
        id: this.afFirestore.createId(),
        title: null,
        description: null,
        due: null,
        createOn: null,
        createdBy: user.uid,
      }))
    );
  }
}
