import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportPageRoutingModule } from './export-page-routing.module';
import { ExportPageComponent } from './export-page.component';

@NgModule({
    declarations: [ExportPageComponent],
    imports: [CommonModule, ExportPageRoutingModule],
})
export class ExportPageModule {}
