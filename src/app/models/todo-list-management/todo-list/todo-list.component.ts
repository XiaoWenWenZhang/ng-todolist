import { Component, Input, OnInit } from '@angular/core';
import { ITaskList } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent {
  @Input() tasks: ITaskList;
}
