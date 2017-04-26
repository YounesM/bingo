import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('card') bingoCard;

  constructor(){

  }

  setSize(number){
    this.bingoCard.gridLenght = number;
    this.bingoCard.build();
  }
}
