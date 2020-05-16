import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { TodoRoutingModule } from './todo.routing';
import { StoreModule } from '@ngrx/store';
import { todoStoreName, todoReducer, TodoFacade, TodoEffects } from '@store';
import { SharedModule } from 'app/shared/shared.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoService } from './todo-service/todo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoComponent,
    ListContainerComponent,
    TodoListComponent,
    EditTodoComponent,
  ],
  imports: [
    TodoRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    EffectsModule.forFeature([TodoEffects]),
    StoreModule.forFeature(todoStoreName, todoReducer),
  ],
  providers: [TodoFacade, TodoService],
})
export class TodoModule {}
