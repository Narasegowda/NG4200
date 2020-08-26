import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationPageRoutingModule } from './organization-page-routing.module';
import { OrganizationPageComponent } from './organization-page.component';

@NgModule({
  declarations: [OrganizationPageComponent],
  imports: [
    CommonModule,
    OrganizationPageRoutingModule
  ]
})
export class OrganizationPageModule { }
