import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Locale } from 'src/app/configs/models/locale';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import {DocumentOnlineService, FilmeFilter} from '../document-online.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  locale = new Locale();
  loading = true;
  invoices = [];
  total = 0;
  filter = new FilmeFilter();

  constructor(
    private service: DocumentOnlineService,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit(): void {
  }

  read(pagina = 0) {
    this.loading = true;
    this.filter.page = pagina;
    this.service.read(this.filter)
      .then(response => {
        this.total = response.total;
        this.invoices = response.body;
      })
      .catch(erro => this.errorHandler.handle(erro))
      .finally(() => this.loading = false);
  }

  onChangePage(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.read(pagina);
  }
}
