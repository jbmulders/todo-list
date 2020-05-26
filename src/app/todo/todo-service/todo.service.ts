import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ITodo } from '@model';
import { Observable, from, of } from 'rxjs';
import {
  map,
  filter,
  switchMap,
  mergeMap,
  concatMap,
  catchError,
} from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class TodoService {
  constructor(
    private afFirestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {}

  loadTodosForUser(userId: string): Observable<ITodo[]> {
    return this.afFirestore
      .collection<ITodo>('todos', (ref) =>
        ref
          .where('createdBy', '==', userId)
          .where('done', '==', false)
          .limit(100)
      )
      .valueChanges()
      .pipe(
        map((todos) => todos.sort((a, b) => (a.due > b.due ? 1 : -1))),
        catchError((err) => of([]))
      );
  }

  // TODO: show these somewhere
  loadDoneTodosForUser(userId: string): Observable<ITodo[]> {
    return this.afFirestore
      .collection<ITodo>('todos', (ref) =>
        ref
          .where('createdBy', '==', userId)
          .where('done', '==', true)
          .limit(100)
      )
      .valueChanges();
  }

  saveTodo(todo: ITodo): Observable<void> {
    return from(this.afFirestore.collection('todos').doc(todo.id).set(todo));
  }
}
