import { Component } from '@angular/core';
import { format } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fib';

  sum: number;
  startPoint: number;
  initialValue: number;

  calculate(first: number) {
    first = first - 2;
    this.startPoint = 0;
    this.initialValue = 1;

    if (first > 0) {
      do {
        this.sum = this.startPoint + this.initialValue;
        this.startPoint = this.initialValue;
        this.initialValue = this.sum;
        first = first - 1;
      } while (first > 0)
      return this.sum;
    } else {
      if (first == 1) {
        this.sum = first;
        return this.sum;
      } else {
        this.sum = 0;
        return this.sum;
      }
    }


  }
}
