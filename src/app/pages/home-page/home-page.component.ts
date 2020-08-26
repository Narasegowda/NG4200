import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
export interface Tile {
    color: string;
    cols: number;
    rows: number;
    
  }

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    constructor() {}

    

    categoryList: any = ['Sports', 'Social', 'Movies']
  
    tiles: Tile[] = [
        {cols: 1, rows: 2, color: '#DDBDF1'},
        { cols: 1, rows: 2, color: '#DDBDF1'},
        {cols: 1, rows: 2,color: '#DDBDF1'},
        {cols: 1, rows: 2, color: '#DDBDF1'},
      ];

      form = new FormGroup({
        category: new FormControl('', Validators.required)
      });

    
      ngOnInit() {
       
      }

      slides = [{'image': '../assets/images/Capture1.PNG'}, 
      {'image': '../assets/images/Capture2.PNG'},
      {'image': '../assets/images/Capture3.PNG'}, 
      {'image': '../assets/images/Capture4.PNG'}];
  

   }

