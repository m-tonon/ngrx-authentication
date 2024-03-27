import { createAction, props } from '@ngrx/store';
import { IRegisterRequest } from '../auth/interfaces/register-request.interface';

export const register = createAction(
  '[Auth] Register',
  props<{ request: IRegisterRequest }>()
);
