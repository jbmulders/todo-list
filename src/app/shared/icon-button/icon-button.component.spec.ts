import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonComponent } from './icon-button.component';
import { Directive, Input } from '@angular/core';

@Directive({ selector: '[appTooltip]' })
export class MockTooltipDirective {
  @Input() appTooltip;
  @Input() position;
}

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconButtonComponent, MockTooltipDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
