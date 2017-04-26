import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo-box',
  templateUrl: './bingo-box.component.html',
  styleUrls: ['./bingo-box.component.css']
})

export class BingoBoxComponent implements OnInit {

  title : string = 'bingo.title';
  gridLenght : number = 5;
  grid : any[] = [];

  constructor() {
    this.build();
  }

  ngOnInit() {
  }

  build(){
    this.grid = [];
    for(let i=0; i < this.gridLenght ; i++){
      let line = Array(this.gridLenght).fill(new Cell());
      this.grid.push(line);
    }
  }

}

class Cell {
  content : string;
  done : boolean = false;
}

