import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL_PREFIX = 'http://localhost:8082';
const QUERY_TASK_LIST_URL =`${URL_PREFIX}/task/list`;
const DELETE_TASK_URL =`${URL_PREFIX}/task/delete`;
const CREATE_TASK_URL = `${URL_PREFIX}/task/create`;
const UPDATE_TASK_URL =`${URL_PREFIX}/task/update`;
export interface Response<T> {
    data: T;
    errorMsg: string;
    retCode: number;
}

export interface ITask {
    id?: string;
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

  deleteTask(id: string){
    return this.http.post<Response<void>>(DELETE_TASK_URL,{id});
  }

  createTask(task: ITask) {
      return this.http.post<Response<string>>(CREATE_TASK_URL, task);
  }

  updateTask(task: ITask) {
    return this.http.post<Response<string>>(UPDATE_TASK_URL, task);
  }

}
