import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { MenuAgentComponent } from './menu-agent/menu-agent.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    TopBarComponent,
    FooterComponent,
    BannerComponent,
    MenuAgentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule,
    SidebarModule,
    MenubarModule,
  ],
  exports: [
    TopBarComponent,
    NavBarComponent,
    BannerComponent,
    FooterComponent,

    MenuAgentComponent
  ]
})
export class LayoutModule { }
