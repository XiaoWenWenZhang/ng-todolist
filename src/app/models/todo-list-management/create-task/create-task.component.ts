import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TaskStatusList } from 'src/app/constants/task';
import { SharedMessageService } from 'src/app/core/services/shared-message.service';
import { ITask, TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.less']
})
export class CreateTaskComponent implements OnInit {
    @Input() showVisible;
    @Input() isEdit = false;
    @Input() task = {} as ITask;
    @Output() showVisibleChange = new EventEmitter<boolean>();
    @Output() taskChange = new EventEmitter<ITask>();
    taskForm: FormGroup;
    Max_Name_Len = 40;
    Max_Content_Len = 200;

    constructor(
        private fb: FormBuilder,
        private taskService: TaskService, 
        private nzMessageService: NzMessageService, 
        private sharedMessageService: SharedMessageService) {}
  
    ngOnInit(): void {
        console.log('11',this.task);
        this.initForm();
    }

    initForm() {
        this.taskForm = this.fb.group({
            name: [this.task.title || '', [Validators.required, Validators.maxLength(40)]],
            content: [this.task.content || '', [Validators.required, Validators.maxLength(200)]]
          });
    }

    createTask(): void {
        this.handleShowVisible();
        const currentTask = {
            status: this.task.status || '0',
            title: this.taskForm.value.name,
            content: this.taskForm.value.content
        } as ITask;
        if(this.isEdit) {
            this.taskChange.emit(currentTask);
            return;
        }
        this.taskService.createTask(currentTask).subscribe(_ => { 
            this.sharedMessageService.sendMessage(true);
            this.nzMessageService.success("任务创建成功");
        })
    }

    handleShowVisible(){
        this.showVisible = false;
        this.showVisibleChange.emit(false);
    }

}


