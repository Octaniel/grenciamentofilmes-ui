import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';
import { AuthRouter } from './auth-router';
import { AuthGuard } from './auth.guard';
import { AuthValidFirstUser } from './auth.valid-first-user';
import { LoginComponent } from './login/login.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    LoginComponent,
    UnauthorizedComponent,
  ],
  imports: [
    CommonModule,
    AuthRouter,
    FormsModule,
    MDBBootstrapModule,
    SharedModule,

    ProgressBarModule,
    DialogModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: environment.tokenWhitelistedDomains,
        blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    })
  ],
  providers: [
    AuthGuard,
    AuthValidFirstUser
  ]
})
export class AuthModule { }
