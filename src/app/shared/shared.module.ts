import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { LogoutComponent } from './logout/logout.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [
    ToastComponent,
    LogoutComponent,
    TooltipDirective,
    SidebarComponent,
    IconButtonComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    ToastComponent,
    LogoutComponent,
    TooltipDirective,
    FormsModule,
    SidebarComponent,
    IconButtonComponent,
  ],
})
export class SharedModule {}
