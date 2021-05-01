import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListManagementComponent } from './todo-list-management.component';

const routes: Routes = [{path:'',component:TodoListManagementComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListManagementRoutingModule { }
