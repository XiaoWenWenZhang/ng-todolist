import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
    // @Output() showDeleteVisibleChange = new EventEmitter<boolean>(); 
    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
    }

    cancelDelete() {
        this.cancel.emit();
    }

    deleteTask(){
        this.ok.emit();
        this.taskService.deleteTask(this.task.taskId).subscribe(res => console.log('res',res))
    }

}
