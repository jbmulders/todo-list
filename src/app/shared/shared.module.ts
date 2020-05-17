import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { LogoutComponent } from './logout/logout.component';
import { TooltipDirective } from './tooltip/tooltip.directive';

@NgModule({
  declarations: [ToastComponent, LogoutComponent, TooltipDirective],
  imports: [CommonModule],
  exports: [ToastComponent, LogoutComponent, TooltipDirective],
})
export class SharedModule {}
