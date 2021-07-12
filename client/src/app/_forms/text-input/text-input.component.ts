import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgControl } from '@angular/forms';

// this component is created to avoid the re-writing of the code for form inputs
// once we create this components with specified values and error validations
// we just need to pass the values in it

// this component will receive FORMCONTROL,LABEL,TYPE from registercomponent(or any other form component)
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() type = 'text';

  constructor(@Self() public ngControl: NgControl) {
    // to inject locally
    this.ngControl.valueAccessor = this;
  }
  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }
}