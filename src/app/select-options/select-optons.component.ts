import {Component, Input, Directive, Provider, forwardRef} from "@angular/core"
import {SelectControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

export const SELECT_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectOptionsComponent),
  multi: true
};

@Component({
    selector: "select-options",
    host: {'(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()'},
    template: `
      <select name="sample" [(ngModel)]="value">
        <option *ngFor="let option of options" [value]="option.value">{{option.name}}</option>
      </select>
    `,
    providers: [SELECT_VALUE_ACCESSOR]
})
export class SelectOptionsComponent extends SelectControlValueAccessor{
  @Input() options:any;
}
