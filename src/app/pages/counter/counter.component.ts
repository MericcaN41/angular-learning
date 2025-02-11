import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter = () => {
    this.currentCount++;
  }

  public decrementCounter = () => {
    this.currentCount--;
  }

  public resetCounter = () => {
    this.currentCount = 0;
  }
}
