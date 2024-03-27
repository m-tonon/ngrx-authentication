import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/auth.actions';
import { RegisterRequest } from '../interfaces/register-request.interface';
import { RouterLink } from '@angular/router';
import { AuthStateInterface } from '../interfaces/auth-state.interface';
import { selectIsSubmitting } from '../../store/auth.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  isSubmitting$ = this.store.select(selectIsSubmitting);

  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: AuthStateInterface }>
  ) {}

  onSubmit() {
    console.log(this.form.getRawValue());

    const request: RegisterRequest = {
      user: this.form.getRawValue(),
    };

    this.store.dispatch(register({ request }));
  }
}
