import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from './tabs/tabs.module';
import { ToastComponent } from './toast/toast.component';
import { LogoutComponent } from './logout/logout.component';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ForRolesDirective } from './for-roles/for-roles.directive';

@NgModule({
  declarations: [
    ToastComponent,
    LogoutComponent,
    TooltipDirective,
    SidebarComponent,
    IconButtonComponent,
    ForRolesDirective,
  ],
  imports: [CommonModule, FormsModule, TabsModule],
  exports: [
    TabsModule,
    ToastComponent,
    LogoutComponent,
    TooltipDirective,
    ForRolesDirective,
    FormsModule,
    SidebarComponent,
    IconButtonComponent,
  ],
})
export class SharedModule {}
