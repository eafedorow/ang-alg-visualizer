import { Component } from '@angular/core';

import { IAnimation } from "../../models/animation.model";

@Component({
  selector: 'app-sorting-chart',
  templateUrl: './sorting-chart.component.html',
  styleUrls: ['./sorting-chart.component.scss']
})
export class SortingChartComponent {
  items: number[] = [3, 4, 1, 5, 2, 6]

  currentIndex: number = -1;
  comparableIndex: number = -1;
  swapPair: number[] = [0,0];
  animations: IAnimation[] = []

  sort(items: number[]) {
    this.currentIndex = 0
    this.comparableIndex = this.currentIndex + 1;
    for (let j = items.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          this.animations.push({ currentIndex: i, comparableIndex: i + 1 })
            if (items[i] > items[i + 1]) {
              this.animations.push({ currentIndex: i, comparableIndex: i + 1, swapPair: [i, i + 1]})
              let temp = items[i];
              items[i] = items[i + 1];
              items[i + 1] = temp;
            }
        }
    }
  }

  reverseSort (items: number[]) {
    for (let j = items.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (items[i] < items[i + 1]) {
          let temp = items[i];
          items[i] = items[i + 1];
          items[i + 1] = temp;
        }
      }
    }
  }
}
