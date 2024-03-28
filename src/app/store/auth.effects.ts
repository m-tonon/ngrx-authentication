import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../auth/services/auth.service';
import { authActions } from './auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ICurrentUser } from '../shared/interfaces/current-user.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from '../shared/services/persistance.service';

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({ request }) => {
        return authService.register(request).pipe(
          map((currentUser: ICurrentUser) => {
            persistanceService.set('accessToken', currentUser.token);
            return authActions.registerSuccess({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
