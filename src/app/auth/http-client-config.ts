import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class HttpClientConfig implements HttpInterceptor {
  token = localStorage.getItem('token');

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.includes('/oauth/token')) {
      const authorizationKey = environment.AUTHORIZATION_KEY;
      request = request.clone({ headers: new HttpHeaders() });
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/x-www-form-urlencoded') });
      request = request.clone({ headers: request.headers.set('Authorization', `Basic ${authorizationKey}`) });
      if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }

      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
      return next.handle(request);
    }

    if (!request.url.includes('/oauth/token') && this.authService.isAccessTokenInvalid()) {
      if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }

      if (!request.headers.has('Accept')) {
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
      }

      return from(this.authService.getNewAccessToken())
        .pipe(
          mergeMap(() => {
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
              }
            });
            return next.handle(request);
          })
        );
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    if (!request.headers.has('Accept')) {
      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`) });

    return next.handle(request);
  }
}
