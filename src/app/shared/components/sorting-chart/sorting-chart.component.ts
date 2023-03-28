import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting-chart',
  templateUrl: './sorting-chart.component.html',
  styleUrls: ['./sorting-chart.component.scss']
})
export class SortingChartComponent {
  items: number[] = [3, 4, 1, 5, 2, 6]
  sort(items: number[]) {
    for (let j = items.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (items[i] > items[i + 1]) {
          let temp = items[i];
          items[i] = items[i + 1];
          items[i + 1] = temp;
        }
      }
    }
  }
}
