import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system/system.service';
import { SolrSystemResponse } from '../../domain/solr-system-response';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    _data: BehaviorSubject<SolrSystemResponse> = new BehaviorSubject<SolrSystemResponse>(null);
    get data() {
        return this._data.value;
    }

  constructor(private systemService: SystemService) { }

  ngOnInit() {
    this.systemService.getData().subscribe(
        response => {
        this._data.next(response);
        },
        err => {
            console.error(err);
        }
    );
  }

}
