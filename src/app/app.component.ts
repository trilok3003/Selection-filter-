import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SelectionService } from './selection/selection.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  // Hardcoded data passed to the view
  public availableCapacities = [
      { capacity: '64GB' },
      { capacity: '128GB' },
      { capacity: '256GB' }
  ];
  public availableUpfrontCosts = [
      { upfrontCostValue: '£0' },
      { upfrontCostValue: '£60' },
      { upfrontCostValue: '£120' },
      { upfrontCostValue: '£180' }
  ];
  public availableColors = [
      { colour: 'silver', marketingColor: 'Silver' },
      { colour: 'gold', marketingColor: 'Gold' },
      { colour: 'grey', marketingColor: 'Space Grey' },
      { colour: 'blue', marketingColor: 'Ocean Blue' }
  ];

  public data: string;
  private unsubscribe$ = new Subject<void>();

  constructor(private simpleSelectionService: SelectionService) { }

  public ngOnInit(): void {
      this.simpleSelectionService.selectedItemChanged$.pipe(
          takeUntil(this.unsubscribe$)
      ).subscribe((selectedItem: any) => {
          this.data = selectedItem;
          console.log('Subscriber activated with value', this.data);
      });
  }

  public ngOnDestroy(): void {
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
  }
}
