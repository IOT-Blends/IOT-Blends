import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isEditable = true;
  stepperOrientation!: Observable<StepperOrientation>;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit() {}

  emailregex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  generalGroup = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [
      null,
      Validators.compose([
        Validators.required,
        Validators.pattern(this.emailregex),
      ]),
    ],
    password: [
      null,
      Validators.compose([Validators.required, Validators.minLength(8)]),
    ],
    mobileNumber: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10),
      ]),
    ],
    dob: [null, Validators.required],
    gender: [null, Validators.required],
  });

  addressGroup = this.fb.group({
    addressLine1: [null, Validators.required],
    addressLine2: [null],
    postalCode: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),
    ],
    state: [null, Validators.required],
    city: [null, Validators.required],
    country: [null, Validators.required],
  });

  accessGroup = this.fb.group({
    accessLevel: ['', Validators.required],
    role: ['', Validators.required],
  });

  onSubmit(): void {
    this.isEditable = false;
    alert('Thanks!');
  }

  login() {
    this.router.navigate(['/welcome/login']);
  }

  onNext() {
    // this.toastr.success('Success Message', 'Success');
  }
}
