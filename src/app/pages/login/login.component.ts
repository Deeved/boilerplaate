import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.nonNullable.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const user = this.form.getRawValue()  

    this.authService.login(user)
    .subscribe(
      {
        next: ({user}) => this.handleSuccess(user),
        error: this.handleError
      }
    );
  }

  handleSuccess(user: User) {
    this.router.navigateByUrl('application/post');
  }

  handleError(error: any) {
    console.log('Erro ao fazer login.', error);
  }

}
