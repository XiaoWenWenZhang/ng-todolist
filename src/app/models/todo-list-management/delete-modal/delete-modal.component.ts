import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedMessageService } from 'src/app/core/services/shared-message.service';
import { ITask, TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less']
})
export class DeleteModalComponent {
    @Input() showDeleteVisible = false;
    @Input() task: ITask;
    @Output() cancel  = new EventEmitter<boolean>(); 
    @Output() ok = new EventEmitter<boolean>();
    constructor(
        private taskService: TaskService, 
        private sharedMessageService: SharedMessageService) { }

    cancelDelete() {
        this.cancel.emit();
    }

    deleteTask(){
        console.log('task',this.task);
        this.taskService.deleteTask(this.task.id).subscribe(_ => {
            this.ok.emit();
            this.sharedMessageService.sendMessage(true);
        });
    }

}
