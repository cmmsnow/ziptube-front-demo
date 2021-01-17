import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  executeJWTRegistrationService = (firstName: string, lastName: string, username: string,
                                   password: string, email: string) => this.http.post<any>(
    `${API_URL}/user`, {
      firstName,
      lastName,
      username,
      password,
      email
    }
  )

  executeFullJWTUpdateUserService = (username: string, firstName: string, lastName: string,
                                     email: string) => this.http.put<any>(
    `${API_URL}/user/${username}`, {
      username,
      firstName,
      lastName,
      email
    }
  )

  executePartialJWTUpdateUserService = (username: string, firstName: string, lastName: string) => this.http.put<any> (
    `${API_URL}/user/updateName/${username}`, {
      username,
      firstName,
      lastName
    }
  )

  executeJWTGetUserService = (username: string) => this.http.get<any>(
    `${API_URL}/user/username/${username}`
  )
}
