import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { LogoutComponent } from './logout/logout.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ToastComponent, LogoutComponent, TooltipDirective],
  imports: [CommonModule, FormsModule],
  exports: [ToastComponent, LogoutComponent, TooltipDirective, FormsModule],
})
export class SharedModule {}
