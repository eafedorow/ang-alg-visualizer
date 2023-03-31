import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { IBarModel } from "../../models/IBarModel";

@Component({
  selector: 'app-sorting-chart',
  templateUrl: './sorting-chart.component.html',
  styleUrls: ['./sorting-chart.component.scss']
})
export class SortingChartComponent implements OnDestroy {
  constructor(private cdr: ChangeDetectorRef) {
  }

  items: IBarModel[] = [{value: 3}, {value: 4}, {value: 1}, {value: 5}, {value: 2}, {value: 6}]
  arrSize: number = 6;
  currentIndex: number = -1;
  comparableIndex: number = -1;
  sortedIndex: number = this.items.length;
  swapPair: number[] = [];
  timeouts: number[] = [];

  sleep(ms:number) {
    return new Promise((resolve) => {
      const timeoutHandle = setTimeout(resolve, ms);
      this.timeouts.push(timeoutHandle);
    });
  }

  restoreIndexies() {
    this.currentIndex = -1;
    this.comparableIndex = -1;
    this.sortedIndex = Number.POSITIVE_INFINITY;
    this.swapPair = [];
    this.cdr.detectChanges();
  }

  async sort() {
    this.sortedIndex = this.items.length;
    for (let i = 0; i < this.items.length; i++) {
      this.cdr.detectChanges();
      await this.sleep(1000);

      for (let j = 0; j < this.items.length - i; j++) {
        this.currentIndex = j;
        this.comparableIndex = j + 1;
        if (j !== this.items.length - i - 1 && this.items[j].value > this.items[j + 1].value) {
          this.swapPair = [j, j + 1];
          this.cdr.detectChanges();
          await this.sleep(1000);
          this.swapPair = [-1, -1];

          const temp = this.items[j].value;
          this.items[j].value = this.items[j + 1].value;
          this.items[j + 1].value = temp;
          this.cdr.detectChanges();
        }

        this.cdr.detectChanges();
        await this.sleep(1000);
      }
      this.sortedIndex = this.items.length - i;
      this.cdr.detectChanges();
    }
    this.restoreIndexies();
  }

  async reversedSort() {
    this.sortedIndex = this.items.length;
    for (let i = 0; i < this.items.length; i++) {
      this.cdr.detectChanges();
      await this.sleep(1000);

      for (let j = 0; j < this.items.length - i; j++) {
        this.currentIndex = j;
        this.comparableIndex = j + 1;
        if (j !== this.items.length - i - 1 && this.items[j].value < this.items[j + 1].value) {
          this.swapPair = [j, j + 1];
          this.cdr.detectChanges();
          await this.sleep(1000);
          this.swapPair = [-1, -1];

          const temp = this.items[j].value;
          this.items[j].value = this.items[j + 1].value;
          this.items[j + 1].value = temp;
          this.cdr.detectChanges();
        }

        this.cdr.detectChanges();
        await this.sleep(1000);
      }
      this.sortedIndex = this.items.length - i;
      this.cdr.detectChanges();
    }
    this.restoreIndexies();
  }

  changeArrSize(event: any): void {
    this.arrSize = event.target.value;
    this.generateRandomArr(this.arrSize);
  }

  generateRandomArr(size: number) {
    this.items = [];
    const newArray: IBarModel[] = [];
    for (let i = 0; i < size; i++) {
      let randomValue = this.getRandomInt(1,6);
      newArray.push({value: randomValue})
    }
    this.items = newArray
    this.restoreIndexies();
  }

   getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnDestroy(): void {
    this.timeouts = [];
  }
}
