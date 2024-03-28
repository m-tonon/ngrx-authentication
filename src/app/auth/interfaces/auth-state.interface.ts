import { IBackendErrors } from "../../shared/interfaces/backend-errors.interface";
import { ICurrentUser } from "../../shared/interfaces/current-user.interface";

export interface IAuthState {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: ICurrentUser | null | undefined;
  validationErrors: IBackendErrors | null;
}