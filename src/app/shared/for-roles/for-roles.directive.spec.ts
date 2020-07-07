import { ForRolesDirective } from './for-roles.directive';
import { RootFacade } from '@store';
import { TemplateRef, ViewContainerRef } from '@angular/core';
import { of } from 'rxjs';

const rootFacadeMock = {
  getUserRole$() {
    return of('TEST');
  },
} as RootFacade;

describe('ForRolesDirective', () => {
  it('should create an instance', () => {
    const directive = new ForRolesDirective(
      rootFacadeMock,
      {} as TemplateRef<any>,
      {} as ViewContainerRef,
    );
    expect(directive).toBeTruthy();
  });
});
