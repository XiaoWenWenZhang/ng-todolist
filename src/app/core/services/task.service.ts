import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const QUERY_TASK_LIST_URL = '/task/list';
export interface Response<T> {
    data: T;
    errorMsg: string;
    retCode: number;
}

export interface ITask {
    status: string;
    title: string;
    content: string;
}

export interface ITaskList {
    key: string;
    label: string;
    values: ITask[];
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor( private http : HttpClient) { }
  queryTaskList(){
      return this.http.post<Response<ITask[] | null >>(QUERY_TASK_LIST_URL,{});
  }

}
