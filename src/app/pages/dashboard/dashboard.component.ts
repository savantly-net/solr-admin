import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system/system.service';
import { SolrSystemResponse } from '../../domain/solr-system-response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    data: SolrSystemResponse;

  constructor(private systemService: SystemService) { }

  ngOnInit() {
    this.systemService.getData().subscribe(
        response => {
        this.data = response;
        },
        err => {
            console.error(err);
        }
    );
  }

}
