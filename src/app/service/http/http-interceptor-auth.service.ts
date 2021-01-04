// this service allows us to add a specific header to each request, so that we can access the backend
import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from '../authentication.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorAuthService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeaderString = this.authenticationService.getAuthenticatedToken();
    const username = this.authenticationService.getAuthenticatedUser();
    if (authHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: authHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
