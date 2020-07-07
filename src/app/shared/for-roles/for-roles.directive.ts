import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { RootFacade } from '@store';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appForRoles]',
})
export class ForRolesDirective {
  private roles: string[];

  @Input() set appForRoles(roles: string[] | string) {
    if (roles != null) {
      this.roles = (Array.isArray(roles) ? roles : [roles]).map((r) =>
        r.toUpperCase(),
      );
    } else {
      this.roles = [];
    }

    this.appFacade
      .getUserRole$()
      .pipe(map((r) => r.toUpperCase()))
      .subscribe((role) =>
        role && !this.roles.includes(role)
          ? this.viewContainer.clear()
          : this.viewContainer.createEmbeddedView(this.templateRef),
      );
  }

  constructor(
    private appFacade: RootFacade,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}
}
