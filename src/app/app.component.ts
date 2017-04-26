import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('card') bingoCard;
  inputTitle = 'bingo.default.title';

  constructor(){

  }

  setSize(number){
    this.bingoCard.gridLenght = number;
    this.bingoCard.build();
  }

  setTitle(){
    console.log(this.inputTitle);
    this.bingoCard.title = this.inputTitle;
  }
}
