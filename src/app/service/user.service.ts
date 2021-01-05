import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  executeJWTRegistrationService = (firstname: string, lastname: string, username: string,
                                   password: string, email: string) => this.http.post<any>(
    `${API_URL}/user`, {
      firstname,
      lastname,
      username,
      password,
      email
    }
  )
}
