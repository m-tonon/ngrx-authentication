import { createFeature, createReducer, on } from '@ngrx/store';
import { IAuthState } from '../auth/interfaces/auth-state.interface';
import { authActions } from './auth.actions';

const initialState: IAuthState = {
  isSubmitting: false,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, (state) => ({ ...state, isSubmitting: true }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
} = authFeature;
