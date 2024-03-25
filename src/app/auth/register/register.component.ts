import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { register } from '../../store/auth.actions';
import { RegisterRequest } from '../interfaces/register-request.interface';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    console.log(this.form.getRawValue());

    const request: RegisterRequest = {
      user: this.form.getRawValue(),
    };

    this.store.dispatch(register({ request }));
  }
}
