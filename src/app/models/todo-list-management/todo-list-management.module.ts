import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListManagementRoutingModule } from './todo-list-management-routing.module';
import { TodoListManagementComponent } from './todo-list-management.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {  TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TodoListManagementComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoListManagementRoutingModule,
    NzButtonModule,
    TranslateModule
  ],
  exports: [TodoListManagementComponent]
})
export class TodoListManagementModule { }
