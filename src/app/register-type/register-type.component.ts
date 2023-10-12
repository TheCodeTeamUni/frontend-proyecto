import { Component, OnInit } from '@angular/core';



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-register-type',
  templateUrl: './register-type.component.html',
  styleUrls: ['./register-type.component.css']
})
export class RegisterTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 1, color: 'lightblue'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Six', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

}
