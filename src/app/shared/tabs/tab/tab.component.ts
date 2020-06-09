import { Component, Input } from '@angular/core';
import { TabsGroupComponent } from '../tabs-group/tabs-group.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() selected: boolean;
  @Input() label: string;

  constructor(tabs: TabsGroupComponent) {
    tabs.addTab(this);
  }
}
