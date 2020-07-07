import { Injectable } from '@angular/core';
import {
  createFeatureSelector,
  createSelector,
  Store,
  select,
} from '@ngrx/store';
import { IRootState, rootStoreName } from './root.actions';
import { Router } from '@angular/router';
import { DoLogout } from '../auth/auth.actions';
import { of } from 'rxjs';

const featureSelector = createFeatureSelector<IRootState>(rootStoreName);
const getIsLoggedIn = createSelector(
  featureSelector,
  (state) => state?.isLoggedIn,
);
const getCurrentUser = createSelector(featureSelector, (state) => state?.user);
const getToastMessage = createSelector(
  featureSelector,
  (state) => state?.message,
);

@Injectable()
export class RootFacade {
  isLoggedIn$ = this.store.pipe(select(getIsLoggedIn));
  user$ = this.store.pipe(select(getCurrentUser));
  toastMessage$ = this.store.pipe(select(getToastMessage));

  constructor(private store: Store, private router: Router) {
    this.isLoggedIn$.subscribe((loggedIn) =>
      loggedIn
        ? this.router.navigate(['/todo/list'])
        : this.router.navigate(['/auth/login']),
    );
  }

  getUserRole$() {
    return of('TEST');
  }
  handleLogout() {
    this.store.dispatch(new DoLogout());
  }
}
