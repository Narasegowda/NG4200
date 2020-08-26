import { OrganizationPageComponent } from './organization-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path:'',component:OrganizationPageComponent,data:{shouldReuse:true,key:'organization'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationPageRoutingModule { }
