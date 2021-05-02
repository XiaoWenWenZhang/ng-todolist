import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListManagementRoutingModule } from './todo-list-management-routing.module';
import { TodoListManagementComponent } from './todo-list-management.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListManagementComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoListManagementRoutingModule
  ],
  exports: [TodoListManagementComponent]
})
export class TodoListManagementModule { }
