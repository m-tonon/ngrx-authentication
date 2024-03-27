import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterRequest } from '../interfaces/register-request.interface';
import { Observable, map } from 'rxjs';
import { ICurrentUser } from '../../shared/interfaces/current-user.interface';
import { IAuthResponse } from '../interfaces/auth-response.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';

    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((response: IAuthResponse) => response.user));
  }
}
