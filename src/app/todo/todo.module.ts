import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { TodoRoutingModule } from './todo.routing';
import { StoreModule } from '@ngrx/store';
import { todoStoreName, todoReducer } from '@store';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [TodoComponent, ListContainerComponent],
  imports: [
    TodoRoutingModule,
    CommonModule,
    SharedModule,
    StoreModule.forFeature(todoStoreName, todoReducer),
  ],
})
export class TodoModule {}
