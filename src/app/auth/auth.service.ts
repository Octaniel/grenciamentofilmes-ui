import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

interface ITokenResponse {
  access_token: string;
  email: string;
  expires_in: number;
  idCont: number;
  idUsuario: number;
  isFirst: false
  jti: string;
  nif: string;
  nome: string;
  scope: string;
  statusAssinatura: boolean;
  statusUsuario: boolean;
  token_type: string;
  ultimoLogin: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  oauthTokenUrl: string;
  jwtPayload: any;
  lastSession: string;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router,
  ) {
    this.oauthTokenUrl = `${environment.apiUrl}/oauth/token`;
    this.getToken();
    this.getLastSession();
  }

  async login(usuario: string, senha: string) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', `Basic ${environment.AUTHORIZATION_KEY}`);

    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    try {
      const response = await this.http.post<any>(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
        .toPromise();

      const token: ITokenResponse = response;
      const isFirst = token.isFirst;

      this.setToken(token.access_token);
      this.setLastSession(token.ultimoLogin);

      return { isFirst };
    } catch (error) {
      if (error.status === 400) {
        if (error.error.error === 'invalid_grant') {
          return Promise.reject('Utilizador ou senha inválida!');
        }
      }
      else if (error.status === 401) {
        if (error.error.error === 'unauthorized') {
          return Promise.reject('Esta conta encontra-se bloqueada. Por favor contactar a DI para mais informações!');
        }
      }
      return await Promise.reject(error);
    }
  }

  async getNewAccessToken(): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', `Basic ${environment.AUTHORIZATION_KEY}`);

    const body = 'grant_type=refresh_token';

    try {
      const response = await this.http.post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
        .toPromise();
      this.setToken(response.access_token);

      return await Promise.resolve(null);
    } catch (response_1) {
      console.error('Erro ao renovar token.', response_1);
      return await Promise.resolve(null);
    }
  }

  private setToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setToken(token);
    }
  }

  private setLastSession(dateString: string) {
    this.lastSession = dateString;
    localStorage.setItem('lastSession', dateString);
  }

  private getLastSession() {
    const lastSession = localStorage.getItem('lastSession');
    if (lastSession) {
      this.setLastSession(lastSession);
    }
  }

  hasPermission(permission: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permission);
  }

  cleanAccessToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('statistics');
    localStorage.removeItem('lastSession');
    localStorage.removeItem('isFirst');
    this.jwtPayload = null;
  }

  isAccessTokenInvalid() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  hasAnyPermission(roles) {
    for (const role of roles) {
      if (this.hasPermission(role)) {
        return true;
      }
    }
    return false;
  }

  async logout(): Promise<any> {
    await this.http.delete(`${environment.apiUrl}/tokens/revoke`, { withCredentials: true })
      .toPromise();
    this.cleanAccessToken();
  }

  hasSession(): boolean {
    return !!this.jwtPayload
  }
}
