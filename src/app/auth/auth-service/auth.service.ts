import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ICredential } from '@model';
import { Observable, from } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private fbAuth: AngularFireAuth) {}

  doLogin({
    email,
    password,
  }: ICredential): Observable<firebase.auth.UserCredential> {
    return from(this.fbAuth.signInWithEmailAndPassword(email, password));
  }

  doLogout(): Observable<void> {
    return from(this.fbAuth.signOut());
  }
}
