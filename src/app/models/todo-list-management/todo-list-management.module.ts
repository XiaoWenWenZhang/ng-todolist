import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListManagementRoutingModule } from './todo-list-management-routing.module';
import { TodoListManagementComponent } from './todo-list-management.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {  TranslateModule } from '@ngx-translate/core';
import { CardComponent } from './card/card.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { PreviewTaskComponent } from './preview-task/preview-task.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
@NgModule({
  declarations: [
    TodoListManagementComponent,
    TodoListComponent,
    CardComponent,
    CreateTaskComponent,
    PreviewTaskComponent,
    DeleteModalComponent,
  ],
  imports: [
    CommonModule,
    TodoListManagementRoutingModule,
    NzButtonModule,
    TranslateModule,
    NzCardModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    FormsModule,
    NzMessageModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
  ],
  exports: [TodoListManagementComponent]
})
export class TodoListManagementModule { }
