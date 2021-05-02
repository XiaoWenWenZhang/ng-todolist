import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TaskStatusList } from 'src/app/constants/task';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-todo-list-management',
  templateUrl: './todo-list-management.component.html',
  styleUrls: ['./todo-list-management.component.less']
})
export class TodoListManagementComponent implements OnInit {
  status='Todo';
  tasks=[];
  readonly TaskStatusList=TaskStatusList;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
      this.taskService.queryTaskList().subscribe(res=>{
          if(res.retCode === 200) {
              console.log(res.data);
          }
      })
  }

}
