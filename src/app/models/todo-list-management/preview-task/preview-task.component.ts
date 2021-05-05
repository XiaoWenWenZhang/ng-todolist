import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskStatusList } from 'src/app/constants/task';
import { ITask, TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-preview-task',
  templateUrl: './preview-task.component.html',
  styleUrls: ['./preview-task.component.less']
})
export class PreviewTaskComponent implements OnInit {
    @Input() showVisible = false;
    @Input() task: ITask;
    @Output() cancel = new EventEmitter<void>();
    @Output() ok = new EventEmitter<void>();
    readonly TaskStatusList = TaskStatusList;
    showDeleteVisible = false;
    constructor(private taskService: TaskService) { }

    ngOnInit(): void {
        console.log('oo',this.task);
    }
    concelCreateTask(){
        this.showVisible = false;
        this.cancel.emit();
    }
    deleteTask() {
        this.taskService.deleteTask(this.task.taskId).subscribe(res=>console.log('res',res));
        this.concelCreateTask();
    }

    cancelDelete() {
        this.showDeleteVisible = false;
        this.cancel.emit();
    }

    confirmDelete() {
        this.showDeleteVisible = false;
        this.ok.emit();
    }
}
