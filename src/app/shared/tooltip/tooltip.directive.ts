import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({ selector: '[appTooltip]' })
export class TooltipDirective {
  @Input('appTooltip') tooltipText = '';
  @Input() position = 'right';

  private tooltip: HTMLElement;
  private delay = 500;
  private offset = 10;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.show();
    setTimeout(() => this.hide(), 5000);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hide();
  }

  private show() {
    if (!this.tooltip && this.tooltipText > '') {
      this.createTooltip();
      this.setStyle();
      this.setPosition();
      this.renderer.addClass(this.tooltip, 'ng-tooltip-show');
    }
  }

  private hide() {
    if (this.tooltip) {
      this.renderer.removeClass(this.tooltip, 'ng-tooltip-show');
      this.renderer.removeChild(document.body, this.tooltip);
      this.tooltip = null;
    }
  }

  private createTooltip() {
    this.tooltip = this.renderer.createElement('span');

    this.renderer.appendChild(
      this.tooltip,
      this.renderer.createText(this.tooltipText),
    );

    this.renderer.appendChild(document.body, this.tooltip);

    this.renderer.addClass(this.tooltip, 'ng-tooltip');
    this.renderer.addClass(this.tooltip, `ng-tooltip-${this.position}`);
  }

  private setStyle() {
    this.renderer.setStyle(
      this.tooltip,
      '-webkit-transition',
      `opacity ${this.delay}ms`,
    );
    this.renderer.setStyle(
      this.tooltip,
      '-moz-transition',
      `opacity ${this.delay}ms`,
    );
    this.renderer.setStyle(
      this.tooltip,
      '-o-transition',
      `opacity ${this.delay}ms`,
    );
    this.renderer.setStyle(
      this.tooltip,
      'transition',
      `opacity ${this.delay}ms`,
    );
    this.renderer.setStyle(this.tooltip, 'position', 'fixed');
    this.renderer.setStyle(this.tooltip, 'background-color', '#000');
    this.renderer.setStyle(this.tooltip, 'color', '#fff');
    this.renderer.setStyle(this.tooltip, 'padding', '5px');
    this.renderer.setStyle(this.tooltip, 'font-size', '0.8em');
    this.renderer.setStyle(this.tooltip, 'border-radius', '5px');
  }

  private setPosition() {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltip.getBoundingClientRect();
    const scrollPos =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    let top: number;
    let left: number;

    if (this.position === 'top') {
      top = hostPos.top - tooltipPos.height - this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    } else if (this.position === 'bottom') {
      top = hostPos.bottom + this.offset;
      left = hostPos.left + (hostPos.width - tooltipPos.width) / 2;
    } else if (this.position === 'left') {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.left - tooltipPos.width - this.offset;
    } else {
      top = hostPos.top + (hostPos.height - tooltipPos.height) / 2;
      left = hostPos.right + this.offset;
    }

    this.renderer.setStyle(this.tooltip, 'top', `${top + scrollPos}px`);
    this.renderer.setStyle(this.tooltip, 'left', `${left}px`);
  }
}
