import {HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {AppHttp} from '../auth/app-http';
import {Invoice, InvoiceView} from '../core/models/invoice-system';

export class FilmeFilter {
  page = 0;
  rows = 15;

  nome: string;
  diretor: string;
  genero: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentOnlineService {
  API_URL: string;
  constructor(private http: AppHttp) {
    this.API_URL = `${environment.apiUrl}/filme`;
  }

  async read(filter: FilmeFilter): Promise<any> {
    let params = new HttpParams();
    params = params.append('page', filter.page.toString());
    params = params.append('size', filter.rows.toString());

    if (filter.nome) {
      params = params.append('nome', filter.nome);
    }

    if (filter.diretor) {
      params = params.append('diretor', filter.diretor);
    }

    if (filter.genero) {
      params = params.append('genero', filter.genero);
    }

    const response = await this.http.get<any>(`${this.API_URL}`, { params })
      .toPromise();
    return {
      body: response.content as Invoice[],
      total: response.totalElements
    };
  }

  async get(id: number): Promise<InvoiceView> {
    const response = await this.http.get(`${this.API_URL}/${id}`)
      .toPromise();
    return response as InvoiceView;
  }
}
