import {Component, Input} from '@angular/core';
import {SquareValue} from "../types";

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em; }']
})
export class SquareComponent {
  @Input() value!: SquareValue;
}
