import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskStatusList } from 'src/app/constants/task';
import { ITask } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-preview-task',
  templateUrl: './preview-task.component.html',
  styleUrls: ['./preview-task.component.less']
})
export class PreviewTaskComponent implements OnInit {
   @Input() showVisible = false;
   @Input() task: ITask;
   @Output() showVisibleChange  = new EventEmitter<boolean>(); 
   readonly TaskStatusList = TaskStatusList;
  constructor() { }

  ngOnInit(): void {
      console.log('oo',this.task);
  }
  concelCreateTask(){
      this.showVisible = false;
      this.showVisibleChange.emit(false);
  }
}
