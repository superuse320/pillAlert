import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Paginate} from '../models/paginate.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  url: string;
  idManager: string;

  constructor(private http: HttpClient,
  ) {
    this.url = environment.url + '/pacientes';
    this.idManager = '1';
  }

  getAll() {
    return this.http.get(this.url);
  }

  getAllByManagerId() {
    return this.http.get<Paginate>(this.url + `/user/${this.idManager}`);
  }

  delete() {
    return this.http.delete(this.url);
  }

  netxPaginate(next_page_url: any) {
    return this.http.get<Paginate>(next_page_url);
  }

  create(value: any) {
    const data = {...value, user_id: 1};
    return this.http.post<Paginate>(this.url, data);
  }
}
