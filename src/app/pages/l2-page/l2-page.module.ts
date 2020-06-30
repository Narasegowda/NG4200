import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { L2PageRoutingModule } from './l2-page-routing.module';
import { L2PageComponent } from './l2-page.component';

@NgModule({
  declarations: [L2PageComponent],
  imports: [
    CommonModule,
    L2PageRoutingModule
  ]
})
export class L2PageModule { }
