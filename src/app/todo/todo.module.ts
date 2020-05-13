import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { TodoRoutingModule } from './todo.routing';
import { StoreModule } from '@ngrx/store';
import { todoStoreName } from '@store';

@NgModule({
  declarations: [TodoComponent, ListContainerComponent],
  imports: [
    TodoRoutingModule,
    CommonModule,
    StoreModule.forFeature(todoStoreName, {}),
  ],
})
export class TodoModule {}
