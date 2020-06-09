import { Component, Output, EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-group',
  templateUrl: './tabs-group.component.html',
  styleUrls: ['./tabs-group.component.scss'],
})
export class TabsGroupComponent {
  @Output() selectedTabChanged = new EventEmitter<TabComponent>(null);

  tabs: TabComponent[] = [];

  selectTab(selectedTab: TabComponent) {
    this.tabs.forEach((tab) => {
      tab.selected = false;
    });
    selectedTab.selected = true;
    this.selectedTabChanged.next(selectedTab);
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      tab.selected = true;
    }
    this.tabs.push(tab);
  }
}
