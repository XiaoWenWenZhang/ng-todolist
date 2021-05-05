import { Component, Input, OnInit } from '@angular/core';
import { ITask, TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
    @Input() task: ITask;
    showDeleteVisible = false;
    editTaskVisible = false;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteTask(){
      this.showDeleteVisible = false;
      this.taskService.deleteTask(this.task.taskId).subscribe(res=>console.log('res',res))
  }

  editTask(){
      this.editTaskVisible = true;
      console.log('kkk')
  }

}
