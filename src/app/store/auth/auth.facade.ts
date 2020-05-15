import { Injectable } from '@angular/core';
import { ICredential, IError } from '@model';
import {
  Store,
  createFeatureSelector,
  createSelector,
  select,
} from '@ngrx/store';
import { IAuthState, DoLogin, DoLogout } from './auth.actions';
import { authStoreName } from './auth.actions';

const featureSelector = createFeatureSelector<IAuthState>(authStoreName);
const getIsLoggedIn = createSelector(
  featureSelector,
  (state) => state?.isLoggedIn
);
const getCurrentUser = createSelector(featureSelector, (state) => state?.user);
const getLoginError = createSelector(
  featureSelector,
  (state) => state?.loginError
);

@Injectable()
export class AuthFacade {
  isLoggedIn$ = this.store.pipe(select(getIsLoggedIn));
  loginError$ = this.store.pipe(select(getLoginError));
  getCurrentUser$ = this.store.pipe(select(getCurrentUser));

  constructor(private store: Store<IAuthState>) {}

  handleLogin(credentials: ICredential) {
    this.store.dispatch(new DoLogin({ credentials }));
  }

  handleLogout() {
    this.store.dispatch(new DoLogout());
  }
}
