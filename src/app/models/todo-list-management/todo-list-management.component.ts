import { Component, OnInit } from '@angular/core';
import { TaskStatusList } from 'src/app/constants/task';

@Component({
  selector: 'app-todo-list-management',
  templateUrl: './todo-list-management.component.html',
  styleUrls: ['./todo-list-management.component.less']
})
export class TodoListManagementComponent implements OnInit {
  status='Todo';
  tasks=[];
  readonly TaskStatusList=TaskStatusList;
  constructor() { }

  ngOnInit(): void {
      this.TaskStatusList.map(item=>console.log(item.label));
  }

}
