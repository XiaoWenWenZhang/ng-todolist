import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TaskStatusMap } from 'src/app/constants/task';
import { ITask, ITaskList, TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-todo-list-management',
  templateUrl: './todo-list-management.component.html',
  styleUrls: ['./todo-list-management.component.less']
})
export class TodoListManagementComponent implements OnInit {
  taskStatusList: ITaskList[] = [];
  taskData: ITask[] = [];
  createTaskVisible = false;
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
     this.initTaskList();
  }

  initTaskList() {
    this.taskService.queryTaskList().subscribe(res=>{
        if(res.retCode === 200) {
            this.taskData = res.data;
            this.taskStatusList = Object.keys(TaskStatusMap).map(item=>({
                key: item,
                label: TaskStatusMap[item],
                values: this.taskData.filter(data=>data.status===item),
            }));
        }
    });
  }
}
