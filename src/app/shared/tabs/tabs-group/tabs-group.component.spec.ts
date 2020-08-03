import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsGroupComponent } from './tabs-group.component';
import { TabComponent } from '../tab/tab.component';

describe('TabsGroupComponent', () => {
  let component: TabsGroupComponent;
  let fixture: ComponentFixture<TabsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsGroupComponent, TabComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
