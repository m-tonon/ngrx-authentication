import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/auth.actions';
import { IRegisterRequest } from '../interfaces/register-request.interface';
import { RouterLink } from '@angular/router';
import { IAuthState } from '../interfaces/auth-state.interface';
// import { selectIsSubmitting } from '../../store/auth.selector';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/auth.reducer';
import { CommonModule } from '@angular/common';
import { combineLatest } from 'rxjs';
import { BackendErrorMessagesComponent } from '../../shared/components/backend-error-messages/backend-error-messages.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorMessagesComponent,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<{ auth: IAuthState }>
  ) {}

  onSubmit() {
    console.log(this.form.getRawValue());

    const request: IRegisterRequest = {
      user: this.form.getRawValue(),
    };

    this.store.dispatch(authActions.register({ request }));
  }
}
