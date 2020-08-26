import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { ExportPageRoutingModule } from './export-page-routing.module';
import { ExportPageComponent } from './export-page.component';

@NgModule({
    declarations: [ExportPageComponent],
    imports: [CommonModule, ExportPageRoutingModule, NgxCsvParserModule],
})
export class ExportPageModule {}
