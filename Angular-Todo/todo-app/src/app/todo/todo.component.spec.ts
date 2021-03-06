import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  // Tutorial Test
  // it('should create an instance', () => {
  //   expect(new TodoComponent()).toBeTruthy();
  // });

  // it('should accept values in the constructor', () => {
  //   let todo = new TodoComponent({
  //     title: 'hello',
  //     complete: true
  //   });
  //   expect(todo.title).toEqual('hello');
  //   expect(todo.complete).toEqual(true);
  // });

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ TodoComponent ]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
