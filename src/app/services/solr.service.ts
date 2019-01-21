import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolrService {

    baseUrl: 'http://localhost:8983';

  constructor() { }
}
