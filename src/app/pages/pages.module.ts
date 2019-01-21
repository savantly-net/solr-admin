import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggingComponent } from './logging/logging.component';
import { CloudConfigsComponent } from './cloud-configs/cloud-configs.component';
import { CloudGraphComponent } from './cloud-graph/cloud-graph.component';
import { CollectionsComponent } from './collections/collections.component';
import { JavaPropsComponent } from './java-props/java-props.component';
import { ThreadDumpComponent } from './thread-dump/thread-dump.component';

@NgModule({
  declarations: [DashboardComponent, LoggingComponent, CloudConfigsComponent, CloudGraphComponent, CollectionsComponent, JavaPropsComponent, ThreadDumpComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
