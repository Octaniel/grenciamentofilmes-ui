import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { LayoutModule } from '../layout/layout.module';
import { DocumentOnlineRouter } from './document-online-router';
import { GetComponent } from './get/get.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [
    ReadComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    DocumentOnlineRouter,

    FormsModule,
    MDBBootstrapModule,
    PDFExportModule,

    LayoutModule,

    TableModule,
    InputTextModule,
    TooltipModule,
    CalendarModule,
    ToggleButtonModule,
    InputTextareaModule,
    ProgressBarModule,
    FileUploadModule,
    DialogModule,
    OverlayPanelModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule
  ]
})
export class DocumentOnlineModule { }
