import { L1PageComponent } from './l1-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path:'',component:L1PageComponent,data:{shouldReuse:true,key:'L1'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L1PageRoutingModule { }
