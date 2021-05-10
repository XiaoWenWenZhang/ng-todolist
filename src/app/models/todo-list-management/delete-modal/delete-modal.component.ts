import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedMessageService } from 'src/app/core/services/shared-message.service';
import { ITask, TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.less']
})
export class DeleteModalComponent {
    @Input() deleteModalVisible = false;
    @Input() task: ITask;
    @Output() cancel = new EventEmitter<boolean>();
    @Output() ok = new EventEmitter<boolean>();
    constructor(
        private taskService: TaskService,
        private sharedMessageService: SharedMessageService,
        private nzMessageService: NzMessageService) { }

    cancelDelete() {
        this.cancel.emit();
    }

    deleteTask() {
        this.taskService.deleteTask(this.task.id).subscribe(res => {
            if( res.retCode === 200 ) {
                this.ok.emit();
                this.sharedMessageService.sendMessage(true);
                this.nzMessageService.success('任务删除成功');
            }else {
                this.nzMessageService.error(res.errorMsg || '任务删除失败');
            }
        });
    }

}
