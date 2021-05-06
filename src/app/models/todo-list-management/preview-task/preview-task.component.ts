import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TaskStatusList } from 'src/app/constants/task';
import { SharedMessageService } from 'src/app/core/services/shared-message.service';
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
    deleteModalVisible = false;
    editTaskVisible = false;
    currentStatus = '';
    taskId = '';
    constructor(
        private taskService: TaskService, 
        private nzMessageService: NzMessageService, 
        private sharedMessageService: SharedMessageService) { }

    ngOnInit(): void {
        this.currentStatus = this.task.status;
        this.taskId = this.task.id;
    }
    concelCreateTask(){
        this.showVisible = false;
        this.cancel.emit();
    }

    cancelDelete() {
        this.deleteModalVisible = false;
        this.cancel.emit();
    }

    confirmDelete() {
        this.deleteModalVisible = false;
        this.ok.emit();
    }

    updateTask() {
        this.showVisible = false;
        const params = {
            ...this.task,
            id: this.taskId,
            status: this.currentStatus,
        } as ITask;
        this.taskService.updateTask(params).subscribe(_ => {
            this.sharedMessageService.sendMessage(true);
            this.nzMessageService.success("任务修改成功");
        })
    }
}
