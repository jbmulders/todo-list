import { Component, OnInit, Input } from '@angular/core';
import { TabsGroupComponent } from '../tabs-group/tabs-group.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  @Input() selected: boolean;
  @Input() label: string;
  @Input() index: number;

  constructor(tabs: TabsGroupComponent) {
    tabs.addTab(this);
  }

  ngOnInit(): void {}
}
