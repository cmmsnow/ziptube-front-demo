import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AuthenticationService} from '../authentication.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorAuthService implements HttpInterceptor {

  constructor(public authenticationService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeaderString = this.authenticationService.getAuthenticatedToken();
    if (authHeaderString) {
      request = request.clone({
        setHeaders: {
          Authorization: authHeaderString
        }
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(`event--->>> ${event}`);
        }
        return event;
      }));
  }
}
