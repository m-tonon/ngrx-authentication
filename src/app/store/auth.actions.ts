import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IRegisterRequest } from '../auth/interfaces/register-request.interface';
import { ICurrentUser } from '../shared/interfaces/current-user.interface';

export const authActions = createActionGroup({
  source: '[Auth]',
  events: {
    Register: props<{ request: IRegisterRequest }>(),
    'Register success': props<{ currentUser: ICurrentUser }>(),
    'Register failure': emptyProps(),
  },
});
