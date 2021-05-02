import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListManagementModule } from './models/todo-list-management/todo-list-management.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MockInterceptor } from './core/interceptors/mock.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TodoListManagementModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
