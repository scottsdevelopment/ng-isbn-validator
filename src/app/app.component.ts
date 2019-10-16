import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { IsbnValidatorService } from './services/isbn-validator.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-isbn-validator';
  isbnFormControl: FormControl;
  matcher: MyErrorStateMatcher;

  constructor(private isbnService: IsbnValidatorService) {

    this.isbnFormControl = new FormControl('', [
      Validators.required,
      this.isbnService.isbnValidator()
    ]);
  
    this.matcher = new MyErrorStateMatcher();
  }

}
