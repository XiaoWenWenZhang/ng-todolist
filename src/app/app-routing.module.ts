import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      redirectTo: 'todolist', pathMatch: 'full'
    },
  {
      path: 'todolist',
      loadChildren: () => import('./models/todo-list-management/todo-list-management.module').then(m => m.TodoListManagementModule)
  },
  {
      path: '**',
      redirectTo: 'todolist'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
