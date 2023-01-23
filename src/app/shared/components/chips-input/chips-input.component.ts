import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chips-input',
  templateUrl: './chips-input.component.html',
  styleUrls: ['./chips-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => ChipsInputComponent)
  }]
})
export class ChipsInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Add subject area keyword';
  @Input() icon: string = 'bi-tags-fill';
  @Input() type: string = 'text';

  keywords: string[] = [];
  inputValue: string = '';

  private _onChange: any = () => {}
  private _onTouch: any = () => {}

  addKeyword(e: any) {
    e.preventDefault();
    if (this.type === 'email') {
      if (!this.isValidEmail(this.inputValue)) {
        // It should be other implementation but this is good for now.
        alert('invalid email');
        return;
      }
    }

    if (this.inputValue.trim() !== '') {
      this.keywords.push(this.inputValue);
      this.triggerChange();
    }
  }

  removeKeyword(index: number) {
    this.keywords.splice(index, 1);
    this.triggerChange();
  }

  writeValue(value: any): void {
    this.keywords = value;
  }

  private isValidEmail(email: string) {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)
  }

  private triggerChange() {
    this.inputValue = '';
    this._onChange(this.keywords);
  }
  

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
