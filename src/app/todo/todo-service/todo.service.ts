import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ITodo } from '@model';
import { Observable, from } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(private afFirestore: AngularFirestore) {}

  loadTodosForUser(userId: string): Observable<ITodo[]> {
    return this.afFirestore
      .collection<ITodo>('todos', (ref) =>
        ref
          .where('createdBy', '==', userId)
          .where('done', '==', false)
          .limit(100)
          .orderBy('due')
      )
      .valueChanges();
  }

  // TODO: show these somewhere
  loadDoneTodosForUser(userId: string): Observable<ITodo[]> {
    return this.afFirestore
      .collection<ITodo>('todos', (ref) =>
        ref
          .where('createdBy', '==', userId)
          .where('done', '==', true)
          .limit(100)
          .orderBy('due')
      )
      .valueChanges();
  }

  saveTodo(todo: ITodo): Observable<void> {
    return from(this.afFirestore.collection('todos').doc(todo.id).set(todo));
  }
}
