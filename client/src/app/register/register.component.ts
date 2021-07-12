import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  // we are now using reactive forms
  // this is our form variable
  registerForm: FormGroup;
  maxDate: Date;
  validationErrors: string[] = [];

  constructor(
    private accountService: AccountService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  // we need to initialise the form first with the components that it is going to have 
  // we can use this components inside <input></input>
  // in the template of this form 
  initializeForm() {
    this.registerForm = this.fb.group({
      // Adding Valiators fro client side
      gender: ['male'],
      username: ['', Validators.required],
      knownAs: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    })

    // without this if we change the password after matching confirmPassword then it will still show valid
    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.confirmPassword.updateValueAndValidity();
    })
  }

  // to match password and confirm password
  // control?.value = confirmPassword
  //control?.parent?.controls[matchTo].value = password
  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value == control?.parent?.controls[matchTo].value ? null : { isMatching: true }
    }
  }

  register() {
    this.accountService.register(this.registerForm.value).subscribe(response => {
      this.router.navigateByUrl('/members');
    }, error => {
      this.validationErrors = error;
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
