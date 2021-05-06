import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedMessageService } from 'src/app/core/services/shared-message.service';
import { ITask, TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less']
})
export class DeleteModalComponent implements OnInit {
    @Input() showDeleteVisible = false;
    @Input() task: ITask;
    @Output() cancel  = new EventEmitter<boolean>(); 
    @Output() ok = new EventEmitter<boolean>();
    constructor(private taskService: TaskService, private sharedMessageService: SharedMessageService) { }

    ngOnInit(): void {
    }

    cancelDelete() {
        this.cancel.emit();
    }

    deleteTask(){
        this.ok.emit();
        this.taskService.deleteTask(this.task.taskId).subscribe(res => {
            this.sharedMessageService.sendMessage(true);
            console.log('res',res);
        });
    }

}
