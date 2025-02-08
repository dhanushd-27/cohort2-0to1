import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  http = inject(HttpClient);

  SignupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  })


  onSubmit() {
    const { name, email, password } = this.SignupForm.getRawValue();

    console.log(this.SignupForm.value);
    this.http.post('http://localhost:3003/api/v1/signup', { name, email, password })
      .pipe(
        catchError(error => {
          console.log(error);
          throw error;
        })
      )
      .subscribe(response => {
        console.log(response);
      });
  }
}
