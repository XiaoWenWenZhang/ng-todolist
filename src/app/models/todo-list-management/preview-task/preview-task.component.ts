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
    editModalVisible = false;
    currentStatus = '';
    oldTask: ITask;
    constructor(
        private taskService: TaskService, 
        private nzMessageService: NzMessageService, 
        private sharedMessageService: SharedMessageService) { }

    ngOnInit(): void {
        this.oldTask = this.task;
        this.currentStatus = this.task.status;
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
            status: this.currentStatus,
        } as ITask;
        if(this.isEqual(this.oldTask,params)) {
            this.cancel.emit();
            return;
        }
        this.taskService.updateTask(params).subscribe(_ => {
            this.sharedMessageService.sendMessage(true);
            this.nzMessageService.success("任务修改成功");
        })
    }

    isEqual(task1: ITask, task2: ITask) {
        if(Object.keys(task1).length !== Object.keys(task2).length){
            return false;
        }
        for(var item in task1){
            if(task1[item] !== task2[item]){
                return false;
            }
        }
        return true;
    }
}
