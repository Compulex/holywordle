import { Component, OnInit } from '@angular/core';
import * as categories from '../assets/categories.json';
import { Word } from './components/word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'holywordle';
  data: any = categories;
  categoriesList : Array<string> = ["Names","Places","Things"];
  chosenArr : Array<{}> = [{name: ""}];
  guesses = [""];
  chosenWord : Word = {};
  idx = 0;

  
  select(event : any){
    let selected = event.target.value;
    switch(selected){
      case "Names":
        this.chosenArr = this.data.names;
        break;
      case "Places":
        this.chosenArr = this.data.places;
        break;
      case "Things":
        this.chosenArr = this.data.things;
        break;
    }
    
    //after array is chosen shuffle it
    this.shuffleArray(this.chosenArr);

    //first try
    this.setWord(false);

    console.log(JSON.stringify(this.chosenArr));
  }

  shuffleArray(arr: Array<{}>){
    //shuffle order of array of categories
    for(let i  = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    this.idx = 0;
  }

  setWord(solved: boolean){
    if(solved){
      this.idx += 1;
    }
    this.chosenWord = this.chosenArr[this.idx];
  }

  checkInput(){

  }
}
