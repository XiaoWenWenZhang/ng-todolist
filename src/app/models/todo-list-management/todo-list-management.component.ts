import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskStatusMap } from 'src/app/constants/task';
import { SharedMessageService } from 'src/app/core/services/shared-message.service';
import { ITask, ITaskList, TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-todo-list-management',
  templateUrl: './todo-list-management.component.html',
  styleUrls: ['./todo-list-management.component.less']
})
export class TodoListManagementComponent implements OnInit, OnDestroy{
  taskStatusList: ITaskList[] = [];
  taskData: ITask[] = [];
  createTaskVisible = false;
  subscript: Subscription;
  constructor(
      private taskService: TaskService, 
      private sharedMessageService: SharedMessageService) {}

  ngOnInit(): void {
     this.queryTaskList();
     this.subscript = this.sharedMessageService.getMessage().subscribe(res => {
         this.queryTaskList();
     })
  }

  queryTaskList() {
    this.taskService.queryTaskList().subscribe(res=>{
        if(res.retCode === 200) {
            this.taskData = res.data;
                this.taskStatusList = Object.keys(TaskStatusMap).map(item=>({
                    key: item,
                    label: TaskStatusMap[item],
                    values: this.taskData.filter(data => data.status === item),
                }));
        }
    });
  }

  ngOnDestroy() {
    this.subscript.unsubscribe();
  }
}
