import { createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../auth/interfaces/auth-state.interface";

export const selectFeature = (state: { auth: AuthStateInterface}) => state.auth;

export const selectIsSubmitting = createSelector(
  selectFeature,
  (state) => state.isSubmitting
);