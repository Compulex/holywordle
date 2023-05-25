import { Component, OnInit } from '@angular/core';
import * as categories from '../assets/categories.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'holywordle';
  data: any = categories;


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log(this.data);
  }
  


}
