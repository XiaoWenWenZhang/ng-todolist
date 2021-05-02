import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
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
  param = {
    value: 'world',
  };
  constructor(private taskService: TaskService,private i18n: TranslateService) {}

  ngOnInit(): void {
      this.taskService.queryTaskList().subscribe(res=>{
          if(res.retCode === 200) {
              console.log(res.data);
          }
      });
      this.translate( 'task.create');
  }

  translate(name:string){
  return  this.i18n.get(name).subscribe((res: string) => {console.log('res', res); return res;});
  }

}
