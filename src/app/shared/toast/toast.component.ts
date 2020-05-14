import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { IToastMessage } from '@model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() toastMessage$: Observable<IToastMessage>;

  show: boolean;
  message: string;
  private componentActive: boolean;

  ngOnInit() {
    this.componentActive = true;
    this.show = false;
    this.toastMessage$
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((error: IToastMessage) => {
        if (error) {
          this.message = error.message;
          this.show = true;
          setTimeout(() => (this.show = false), error.duration || 4000);
        }
      });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
