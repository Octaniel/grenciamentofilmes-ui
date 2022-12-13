import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { LayoutModule } from '../layout/layout.module';
import { AboutComponent } from './about/about.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './document/document.component';
import { EmitterComponent } from './emitter/emitter.component';
import { FuncionalityUtilComponent } from './funcionality-util/funcionality-util.component';
import { IndexComponent } from './index/index.component';
import { StartRouter } from './start-router';

@NgModule({
  declarations: [
    IndexComponent,
    ContactComponent,
    AboutComponent,
    EmitterComponent,
    DocumentComponent,
    FuncionalityUtilComponent,
    ConsumerComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    StartRouter,
    MDBBootstrapModule,
    DialogModule,
    LayoutModule,
    TabViewModule,
    ProgressBarModule,
    ToolbarModule,
    ButtonModule
  ]
})
export class StartModule { }
