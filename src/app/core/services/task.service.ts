import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const QUERY_TASK_LIST_URL = '/task/list';
const DELETE_TASK_URL = '/task/delete';
export interface Response<T> {
    data: T;
    errorMsg: string;
    retCode: number;
}

export interface ITask {
    taskId: string;
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

  deleteTask(taskId: string){
    return this.http.post<Response<void>>(DELETE_TASK_URL,taskId);
}

}
