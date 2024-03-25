import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../auth/interfaces/register-request.interface';

export const register = createAction(
  '[Auth] Register',
  props<{ request: RegisterRequest }>()
);
