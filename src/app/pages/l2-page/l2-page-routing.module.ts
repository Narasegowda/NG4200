import { L2PageComponent } from './l2-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {path:'',component:L2PageComponent,data:{shouldReuse:true,key:'l2'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class L2PageRoutingModule { }
