import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../auth/services/auth.service';
import { authActions } from './auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ICurrentUser } from '../shared/interfaces/current-user.interface';

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            return authActions.registerSuccess({ currentUser });
          }),
          catchError(() => {
            return of(authActions.registerFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
