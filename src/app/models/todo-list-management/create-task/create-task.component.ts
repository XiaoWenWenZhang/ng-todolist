import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SharedMessageService } from 'src/app/core/services/shared-message.service';
import { ITask, TaskService } from 'src/app/core/services/task.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.less']
})
export class CreateTaskComponent implements OnInit, AfterViewInit {
    @Input() showVisible;
    @Input() isEdit = false;
    @Input() task = {} as ITask;
    @Output() showVisibleChange = new EventEmitter<boolean>();
    taskForm: FormGroup;
    MAX_NAME_LEN = 40;
    MAX_CONTENT_LEN = 200;
    modalTitle = '';
    constructor(
        private fb: FormBuilder,
        private taskService: TaskService,
        private nzMessageService: NzMessageService,
        private sharedMessageService: SharedMessageService) {}
    ngAfterViewInit(): void {
        const conEle: HTMLInputElement = document.querySelector('#content');
        conEle.setAttribute("rows",conEle.value.split('\n').length.toString()); 
    }

    ngOnInit(): void {
        this.modalTitle = this.isEdit ? 'task.edit' : 'task.create';
        this.initForm();
    }

    initForm() {
        this.taskForm = this.fb.group({
            name: [this.task.title || '', [Validators.required, Validators.maxLength(this.MAX_NAME_LEN)]],
            content: [this.task.content || '', [Validators.required, Validators.maxLength(this.MAX_CONTENT_LEN)]]
          });
    }

    createTask(): void {
        this.handleShowVisible();
        const currentTask = {
            ...this.task,
            status: this.task.status || '0',
            title: this.taskForm.value.name,
            content: this.taskForm.value.content
        } as ITask;
        if( !this.isEdit ) {
            this.taskService.createTask(currentTask).subscribe(_ => {
                this.sharedMessageService.sendMessage(true);
                this.nzMessageService.success('任务创建成功');
            });
        }else {
            if( !(this.task.title === this.taskForm.value.name && this.task.content === this.taskForm.value.content )) {
                this.taskService.updateTask(currentTask).subscribe(_ => {
                    this.sharedMessageService.sendMessage(true);
                    this.nzMessageService.success('任务修改成功');
                });
            }
        }
    }

    handleShowVisible() {
        this.showVisible = false;
        this.showVisibleChange.emit(false);
    }

}


