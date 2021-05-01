import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListManagementComponent } from './todo-list-management.component';

describe('TodoListManagementComponent', () => {
  let component: TodoListManagementComponent;
  let fixture: ComponentFixture<TodoListManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
