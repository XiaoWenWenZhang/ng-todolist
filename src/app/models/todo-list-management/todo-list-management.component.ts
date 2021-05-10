import { Component, OnDestroy, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
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
  createModalVisible = false;
  sharedMessageSubscription: Subscription;
  constructor(
      private taskService: TaskService,
      private sharedMessageService: SharedMessageService,
      private nzMessageService: NzMessageService) {}

  ngOnInit(): void {
     this.queryTaskList();
     this.sharedMessageSubscription = this.sharedMessageService.getMessage().subscribe(res => {
         if( res ) {
            this.queryTaskList();
         }
     });
  }

  queryTaskList() {
    this.taskService.queryTaskList().subscribe(res => {
        if( res.retCode === 200 ) {
            this.taskData = res.data;
            this.taskStatusList = Object.keys(TaskStatusMap).map(item => ({
                key: item,
                label: TaskStatusMap[item],
                values: this.taskData.filter(data => data.status === item),
            }));
        }else {
            this.nzMessageService.error(res.errorMsg || 'TodoList列表查询失败');
        }
    });
  }

  ngOnDestroy() {
    this.sharedMessageSubscription.unsubscribe();
  }
}
