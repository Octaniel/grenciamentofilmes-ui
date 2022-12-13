import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AuthValidFirstUser } from '../auth/auth.valid-first-user';
import { AboutComponent } from './about/about.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { EmitterComponent } from './emitter/emitter.component';
import { FuncionalityUtilComponent } from './funcionality-util/funcionality-util.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    canActivate: [AuthGuard, AuthValidFirstUser],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, AuthValidFirstUser],
  },
  {
    path: 'documento',
    component: DocumentComponent,
    canActivate: [AuthGuard, AuthValidFirstUser],
  },
  {
    path: 'contacto',
    component: ContactComponent,
    canActivate: [AuthGuard, AuthValidFirstUser],
  },
  {
    path: 'sobre',
    component: AboutComponent,
    canActivate: [AuthGuard, AuthValidFirstUser],
  },
  {
    path: 'emitente',
    component: EmitterComponent,
    canActivate: [AuthGuard, AuthValidFirstUser],
  },
  {
    path: 'adquirente',
    component: ConsumerComponent,
    canActivate: [AuthGuard, AuthValidFirstUser],
  },
  {
    path: 'util',
    component: FuncionalityUtilComponent,
    canActivate: [AuthGuard, AuthValidFirstUser],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StartRouter { }
