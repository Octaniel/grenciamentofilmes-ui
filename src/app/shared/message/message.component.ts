import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="ui-message ui-message-error">{{ text }}</div>
  `,
  styles: [`
    .ui-message-error{
      margin: 0;
      color: rgb(253, 5, 5);;
      border: 1px #ffffff;
      font-size: 8pt;
    }
` ]
})
export class MessageComponent {
  @Input() error: string;
  @Input() control: UntypedFormControl;
  @Input() text: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.touched;
  }
}
