import { Injectable } from '@angular/core';
import { ICredential, IError } from '@model';
import {
  Store,
  createFeatureSelector,
  createSelector,
  select,
} from '@ngrx/store';
import {
  IAuthState,
  DoLogin,
  DoLogout,
  LoginSuccess,
  LogoutSuccess,
} from './auth.actions';
import { authStoreName } from './auth.actions';
import { AuthService } from 'app/auth/auth-service/auth.service';
import { take } from 'rxjs/operators';

const featureSelector = createFeatureSelector<IAuthState>(authStoreName);
const getIsLoggedIn = createSelector(
  featureSelector,
  (state) => state?.isLoggedIn
);
const getLoggingIn = createSelector(
  featureSelector,
  (state) => state?.loggingIn
);
const getCurrentUser = createSelector(featureSelector, (state) => state?.user);

@Injectable()
export class AuthFacade {
  isLoggedIn$ = this.store.pipe(select(getIsLoggedIn));
  getCurrentUser$ = this.store.pipe(select(getCurrentUser));
  loggingIn$ = this.store.pipe(select(getLoggingIn));

  constructor(
    private store: Store<IAuthState>,
    private authService: AuthService
  ) {
    authService.authState$
      .pipe(take(1))
      .subscribe((user) =>
        user
          ? store.dispatch(new LoginSuccess({ user }))
          : store.dispatch(new LogoutSuccess())
      );
  }

  handleLogin(credentials: ICredential) {
    this.store.dispatch(new DoLogin({ credentials }));
  }

  handleLogout() {
    this.store.dispatch(new DoLogout());
  }
}
