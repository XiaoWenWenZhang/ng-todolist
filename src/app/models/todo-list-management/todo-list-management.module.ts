import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListManagementRoutingModule } from './todo-list-management-routing.module';
import { TodoListManagementComponent } from './todo-list-management.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {  TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';
@NgModule({
  declarations: [
    TodoListManagementComponent,
    TodoListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TodoListManagementRoutingModule,
    NzButtonModule,
    TranslateModule,
    NzCardModule,
    NzIconModule,
    NzModalModule
  ],
  exports: [TodoListManagementComponent]
})
export class TodoListManagementModule { }
