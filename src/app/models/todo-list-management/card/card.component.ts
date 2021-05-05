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
    showPreviewVisible = false;
    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
    }

    cancelDelete() {
        this.showDeleteVisible = false;
    }

    confirmDelete() {
        this.showDeleteVisible = false;
    }

    cancelPreview() {
        this.showPreviewVisible = false;
    }

    confirmPreview() {
        this.showPreviewVisible = false;
    }

}
