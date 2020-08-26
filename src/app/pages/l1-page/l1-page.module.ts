import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L1PageRoutingModule } from './l1-page-routing.module';
import { L1PageComponent } from '../l1-page/l1-page.component';

@NgModule({
  declarations: [L1PageComponent],
  imports: [
    CommonModule,
    L1PageRoutingModule
  ]
})
export class L1PageModule { }
