import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComponent } from './tab.component';
import { TabsGroupComponent } from '../tabs-group/tabs-group.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsGroupComponent, TabComponent],
      providers: [TabsGroupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
