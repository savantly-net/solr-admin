import { Injectable } from '@angular/core';
import { SolrService } from '../solr.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolrAdminMetricsService extends SolrService {

    path = '/solr/admin/metrics';

  constructor(private http: HttpClient) {
      super();
  }

  getJvmData() {
      return this.http.get<any>(this.path + '?group=jvm');
  }
}
