import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from 'app/auth/auth-service/auth.service';
import {
  EAuthActionType,
  LoginSuccess,
  LoginError,
  DoLogin,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  @Effect()
  doLogin$: Observable<Action> = this.actions$.pipe(
    ofType(EAuthActionType.login),
    mergeMap((action: DoLogin) =>
      this.authService.doLogin(action.payload.credentials).pipe(
        map((fbUser) => {
          return new LoginSuccess({ user: fbUser.user.providerData[0] });
        }),
        catchError((error) =>
          of(
            new LoginError({
              error: { message: error.message, code: error.code },
            })
          )
        )
      )
    )
  );
}
