import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,  ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  route = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  
  registration() {
    const user = this.form.getRawValue()   
    this.authService.registerUser(user)
    .subscribe(
      {
        complete: this.handleSuccess, 
        error: this.handleError
      }
    )
  }

  handleError(error: any){
    console.log('error: ', error );
  }

  handleSuccess() {
    this.route.navigateByUrl('authentication/login');
  }
}
