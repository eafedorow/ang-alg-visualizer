import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sorting-bar',
  templateUrl: './sorting-bar.component.html',
  styleUrls: ['./sorting-bar.component.scss']
})
export class SortingBarComponent {
  @Input() value: number = 0;
  @Input() isCurrentIndex: boolean = false;
  @Input() isComparableIndex: boolean = false;
  @Input() isSorted: boolean = false;
  @Input() isSwapIndex: boolean = false;
}
