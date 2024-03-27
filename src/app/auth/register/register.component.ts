import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/auth.actions';
import { IRegisterRequest } from '../interfaces/register-request.interface';
import { RouterLink } from '@angular/router';
import { IAuthState } from '../interfaces/auth-state.interface';
// import { selectIsSubmitting } from '../../store/auth.selector';
import { selectIsSubmitting } from '../../store/auth.reducer';
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
    private store: Store<{ auth: IAuthState }>
  ) {}

  onSubmit() {
    console.log(this.form.getRawValue());

    const request: IRegisterRequest = {
      user: this.form.getRawValue(),
    };

    this.store.dispatch(register({ request }));
  }
}
