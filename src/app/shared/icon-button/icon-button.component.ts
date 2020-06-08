import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
})
export class IconButtonComponent {
  @Input() icon: string;
  @Input() tooltip: string;
  @Input() position: string;
  @Output() handleClick = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent) {
    this.handleClick.next(event);
  }
}
