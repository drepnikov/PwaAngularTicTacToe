import { Component, OnInit } from '@angular/core';
import {SquareValue} from "../types";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares!: SquareValue[];
  xIsNext!: boolean;
  winner!: string | null;

  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }

  newGame() {
    this.squares = Array<null>(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  get player() {
    return this.xIsNext ? "X" : "O"
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    for(let i = 0; i < this.winCombox.length; i ++) {
      const [a,b,c] = this.winCombox[i];

      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        return this.squares[a]
      }
    }

    return null;
  }

  private winCombox = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
  ]
}
