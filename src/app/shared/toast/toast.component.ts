import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { IToastMessage, IError } from '@model';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, OnDestroy {
  @Input() toastMessage: Observable<IToastMessage | IError>;

  show: boolean;
  message: string;
  private componentActive: boolean;

  ngOnInit() {
    this.componentActive = true;
    this.show = false;
    this.toastMessage
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((toastMessage: IToastMessage) => {
        if (toastMessage) {
          this.message = toastMessage.message;
          this.show = true;
          console.log(this.message);
          setTimeout(() => (this.show = false), toastMessage.duration || 4000);
        }
      });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
