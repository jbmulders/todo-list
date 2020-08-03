import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RootFacade } from '@store';

class RootFacadeMock {}

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: RootFacade, useClass: RootFacadeMock }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
