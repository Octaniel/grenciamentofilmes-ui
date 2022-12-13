import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as moment from 'moment';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { AppHttp } from '../auth/app-http';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { StartModule } from '../start/start.module';
import { DocumentOnlineModule } from '../document-online/document-online.module';
import { DocumentOnlineService } from '../document-online/document-online.service';
import { ErrorHandlerService } from './error-handler.service';

moment.locale('pt');

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastModule,
    ConfirmDialogModule,

    AuthModule,
    StartModule,
    DocumentOnlineModule
  ],
  exports: [
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [
    Title,
    { provide: LOCALE_ID, useValue: 'pt' },

    // { provide: HTTP_INTERCEPTORS, useClass: HttpClientConfig, multi: true },

    AppHttp,
    ErrorHandlerService,
    JwtHelperService,
    MessageService,
    ConfirmationService,

    AuthService,
    DocumentOnlineService
  ]
})
export class CoreModule { }
