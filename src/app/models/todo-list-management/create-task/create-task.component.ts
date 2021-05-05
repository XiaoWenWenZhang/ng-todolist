import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TaskStatusList } from 'src/app/constants/task';
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
    @Input() isCreate = false;
    @Input() task = {} as ITask;
    @Output() showVisibleChange = new EventEmitter<boolean>();
    readonly TaskStatusList = TaskStatusList;
    constructor(private fb: FormBuilder,private taskService: TaskService, private nzMessageService: NzMessageService) {
    }
  
    ngOnInit(): void {
      this.taskForm = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(40)]],
        content: ['', [Validators.required, Validators.maxLength(200)]]
      });
    }

    createTask(): void {
        // if(!this.taskForm.valid) {
        //     console.log('11');
        //     return;
        // }
        console.log('mm',this.taskForm)
        const params = {
            status: '0',
            title: this.taskForm.value.name,
            content: this.taskForm.value.content
        }
        this.taskService.createTask(params).subscribe(res => {
            this.nzMessageService.success("任务创建成功");
        })

        this.concelCreateTask();
    }

    concelCreateTask(){
        this.showVisible = false;
        this.showVisibleChange.emit(false);
    }

}


