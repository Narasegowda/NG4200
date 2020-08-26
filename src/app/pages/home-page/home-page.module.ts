import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule, MatInputModule} from '@angular/material'
import {MatGridListModule} from '@angular/material/grid-list';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatCardModule, MatButtonModule} from '@angular/material';



@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, 
            HomePageRoutingModule,
            MatIconModule,
            MatInputModule,
            MatGridListModule,
            FormsModule,
            ReactiveFormsModule,
            MatCarouselModule.forRoot(),
            MatCardModule, MatButtonModule
            ],
})
export class HomePageModule {}
