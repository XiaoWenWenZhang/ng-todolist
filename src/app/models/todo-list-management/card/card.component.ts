import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
    @Input() task: ITask;
  constructor() { }

  ngOnInit(): void {
  }

}
