import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit{
  @Input() guess = "";
  @Input() answer : any = "";
  word = [];
  @Output() 
  
  
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    if(changes["answer"].currentValue != undefined){
      this.word = changes["answer"].currentValue.split("");
    }
  }

  addToGuess(event:any){
    
  }
}
