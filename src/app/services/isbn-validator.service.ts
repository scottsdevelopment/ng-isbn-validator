import { Injectable } from '@angular/core';
import isIsbnValid from './isbn-validator';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class IsbnValidatorService {

  constructor() { }

  isIsbnValid(isbn: string) {
    return isIsbnValid(isbn);
  }

  isbnValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const valid: boolean = this.isIsbnValid(control.value);
      return valid ? null : {'isbn': {value: control.value}};
    };
  }
}
