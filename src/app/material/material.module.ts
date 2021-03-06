import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
    MatCardModule, MatProgressBarModule, MatDialogModule, MatGridListModule, MatSelectModule } from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        MatGridListModule,
        MatSelectModule
    ],
    exports: [
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatProgressBarModule,
        MatDialogModule,
        MatGridListModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
