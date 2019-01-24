import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../services/system/system.service';
import { SolrSystemResponse } from '../../domain/solr-system-response';
import { BehaviorSubject } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SolrVersionDialogComponent } from '../../dialogs/solr-version-dialog/solr-version-dialog.component';

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

    constructor(private systemService: SystemService, public dialog: MatDialog) { }

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

    openSolrVersionDialog(): void {
        const dialogRef = this.dialog.open(SolrVersionDialogComponent, {
            data: this.data
        });
    }

}
