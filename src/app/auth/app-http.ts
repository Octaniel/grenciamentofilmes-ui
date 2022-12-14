import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from as observableFromPromise, Observable } from 'rxjs';
import { AuthService } from './auth.service';

export class NotAuthenticatedError {
}

@Injectable()
export class AppHttp extends HttpClient {
  constructor(
    private auth: AuthService,
    private httpHandler: HttpHandler
  ) {
    super(httpHandler);
  }

  public delete<T>(url: string, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.delete<T>(url, options));
  }

  public patch<T>(url: string, body: any, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.patch<T>(url, body, options));
  }

  public head<T>(url: string, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.head<T>(url, options));
  }

  public options<T>(url: string, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.options<T>(url, options));
  }

  public get<T>(url: string, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.get<T>(url, options));
  }

  public post<T>(url: string, body: any, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.post<T>(url, body, options));
  }

  public put<T>(url: string, body: any, options?: any): Observable<T> {
    return this.doRequest<T>(() => super.put<T>(url, body, options));
  }

  private doRequest<T>(fn: Function): Observable<T> {
    if (this.auth.isAccessTokenInvalid()) {
      // console.log('HTTP request with invalid access token. Getting new token ...');
      this.auth.cleanAccessToken();

      const callNewAccessToken = this.auth.getNewAccessToken()
        .then(() => {
          if (this.auth.isAccessTokenInvalid()) {
            throw new NotAuthenticatedError();
          }

          return fn().toPromise();
        });

      return observableFromPromise(callNewAccessToken);
    } else {
      return fn();
    }
  }
}
