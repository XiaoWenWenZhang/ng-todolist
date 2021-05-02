import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const QUERY_TASK_LIST_URL = '/task/list';
export interface Response<T> {
    data: T;
    errorMsg: string;
    retCode: number;
}

export interface ITask {
    status: number;
    title: string;
    content: string;
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
