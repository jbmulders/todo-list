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

const featureSelector = createFeatureSelector<IAuthState>(authStoreName);
const getIsLoggedIn = createSelector(
  featureSelector,
  (state) => state?.isLoggedIn
);
const getCurrentUser = createSelector(featureSelector, (state) => state?.user);

@Injectable()
export class AuthFacade {
  isLoggedIn$ = this.store.pipe(select(getIsLoggedIn));
  getCurrentUser$ = this.store.pipe(select(getCurrentUser));

  constructor(
    private store: Store<IAuthState>,
    private authService: AuthService
  ) {
    authService.authState$.subscribe((user) =>
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
