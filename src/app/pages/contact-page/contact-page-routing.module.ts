import { ContactPageComponent } from './contact-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ContactPageComponent,
        data: { shouldReuse: true, key: 'contact' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactPageRoutingModule {}
