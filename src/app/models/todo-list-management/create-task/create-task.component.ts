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
    taskForm!: FormGroup;
    @Input() showVisible;
    @Input() isEdit = false;
    @Input() task = {} as ITask;
    @Output() showVisibleChange = new EventEmitter<boolean>();
    @Output() taskChange = new EventEmitter<ITask>();
    readonly TaskStatusList = TaskStatusList;
    constructor(private fb: FormBuilder,private taskService: TaskService, private nzMessageService: NzMessageService, 
        private sharedMessageService: SharedMessageService) {
    }
  
    ngOnInit(): void {
      this.taskForm = this.fb.group({
        name: [this.task.title||'', [Validators.required, Validators.maxLength(40)]],
        content: [this.task.content||'', [Validators.required, Validators.maxLength(200)]]
      });
    }

    createTask(): void {
        this.concelCreateTask();
        const params = {
            status: this.task.status || '0',
            title: this.taskForm.value.name,
            content: this.taskForm.value.content
        } as ITask;
        console.log('sssss',params);
        if(this.isEdit) {
            this.taskChange.emit(params);
            return;
        }
        this.taskService.createTask(params).subscribe(_ => { 
            this.sharedMessageService.sendMessage(true);
            this.nzMessageService.success("任务创建成功");
        })
    }

    concelCreateTask(){
        this.showVisible = false;
        this.showVisibleChange.emit(false);
    }

}


