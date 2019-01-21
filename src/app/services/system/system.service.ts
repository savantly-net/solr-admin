import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolrService } from '../solr.service';
import { SystemData } from './system-data';

@Injectable({
  providedIn: 'root'
})
export class SystemService extends SolrService {

    path = '/admin/info/system';

  constructor(private http: HttpClient) {
      super();
  }

  getInfo() {
      return this.http.get<SystemData>(this.baseUrl + this.path);
  }
}
