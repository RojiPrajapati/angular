import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private router = inject(Router);

  userReactiveForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirmPassword: new FormControl('')
  });

  onSubmitReactive(): void {

    if (this.userReactiveForm.invalid) {
      this.userReactiveForm.markAllAsTouched();
      return;
    }

    console.log(this.userReactiveForm.controls.username.value);

    this.router.navigate(['/dashboard'], {
      queryParams: {
        data: JSON.stringify(this.userReactiveForm.value)
      }
    });
  }
}