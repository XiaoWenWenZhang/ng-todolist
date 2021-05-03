import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {
  @Input() tasks: ITask;
  constructor() { }

  ngOnInit(): void {
      console.log('ll',this.tasks)
  }

}
