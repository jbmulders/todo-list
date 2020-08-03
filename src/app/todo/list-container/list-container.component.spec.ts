import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContainerComponent } from './list-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodoFacade } from '@store';
import { of } from 'rxjs';

class TodoFacadeMock {
  loading$ = of(false);

  handleLoadTodos = () => of([]);
}

describe('ListContainerComponent', () => {
  let component: ListContainerComponent;
  let fixture: ComponentFixture<ListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListContainerComponent],
      providers: [{ provide: TodoFacade, useClass: TodoFacadeMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
