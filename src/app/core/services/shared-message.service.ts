import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedMessageService {

  constructor() { }

  private subject = new Subject<any>();
 
    sendMessage(message: boolean) {
        this.subject.next({ text: message });
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
