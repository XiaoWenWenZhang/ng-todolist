import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListManagementRoutingModule } from './todo-list-management-routing.module';
import { TodoListManagementComponent } from './todo-list-management.component';


@NgModule({
  declarations: [
    TodoListManagementComponent
  ],
  imports: [
    CommonModule,
    TodoListManagementRoutingModule
  ],
  exports: [TodoListManagementComponent]
})
export class TodoListManagementModule { }
