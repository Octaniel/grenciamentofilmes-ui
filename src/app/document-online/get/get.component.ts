import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Authorization } from './../../core/models/authorization';
import { Certification } from './../../core/models/certification';
import { InvoiceView } from './../../core/models/invoice-system';
import { TaxPayer } from './../../core/models/taxpayer';
import { TaxpayerWebService } from './../../core/models/taxpayer-webservice';
import { TypeTax } from './../../core/models/type-tax';
import { DocumentOnlineService } from './../document-online.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  invoice = new InvoiceView();
  tipoImposto = new TypeTax();
  contribuinte = new TaxPayer();
  contribuinteEmitente = new TaxPayer();
  autorizacao = new Authorization();
  certificacao = new Certification();
  consumer = new TaxpayerWebService();

  constructor(
    private service: DocumentOnlineService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const documentId = this.route.snapshot.params.id;
    this.get(documentId);
  }

  get(id) {
    this.service.get(id)
      .then(response => {
        this.invoice = response;
      })
      .catch(error => this.errorHandler.handle(error));
  }

}
