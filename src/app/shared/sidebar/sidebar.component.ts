import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  show: boolean;

  ngOnInit(): void {
    this.show = false;
  }

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }
}
