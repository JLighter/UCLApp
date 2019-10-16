import { Directive, Input } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { containsValidator } from 'src/app/utilities/validators';

@Directive({
  selector: '[contains]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ContainsDirective, multi: true }
  ]
})
export class ContainsDirective implements Validator {

  @Input('contains')
  containsText : string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return containsValidator(this.containsText)(control);
  }

}
