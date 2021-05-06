import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask, TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
    @Input() task: ITask;
    deleteModalVisible = false;
    previewModalVisible = false;

    cancelDelete() {
        this.deleteModalVisible = false;
    }

    confirmDelete() {
        this.deleteModalVisible = false;
    }

    cancelPreview() {
        this.previewModalVisible = false;
    }

    confirmPreview() {
        this.previewModalVisible = false;
    }

}
