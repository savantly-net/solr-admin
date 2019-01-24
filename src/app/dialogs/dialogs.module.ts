import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolrVersionDialogComponent } from './solr-version-dialog/solr-version-dialog.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SolrVersionDialogComponent
  ],
  entryComponents: [
    SolrVersionDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    SolrVersionDialogComponent
  ]
})
export class DialogsModule { }
