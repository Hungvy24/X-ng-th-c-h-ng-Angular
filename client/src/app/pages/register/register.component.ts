import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginRes } from '../../../types/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  authService = inject(AuthService);
  router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  handleSubmit() {
    console.log(this.loginForm.value);

    this.authService.register(this.loginForm.value).subscribe({
      next: (data) => {
        localStorage.setItem('token', (data as UserLoginRes).token);
        localStorage.setItem('userId', (data as UserLoginRes).user._id);

        setTimeout(() => this.router.navigate(['/']), 1000);
      },
      error: (error) => {
        // show error
        console.error(error.message);
      },
    });
  }
}
