import { Component, Input, OnInit } from '@angular/core';
import { SelectionService } from './selection.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit {
  @Input() public items: Array<any> = [];
  @Input() public selectedItem: any;
  @Input() public label: string = 'value';
  @Input() public disabled: boolean = false;
  @Input() public noWrap: boolean = false;
  @Input() public type: string;

  constructor(public selectionService: SelectionService) {}

  public selectItem(item: any) {
    if (!this.disabled) {
      this.selectedItem = item[this.label];
      console.log('item selected', this.selectedItem);
      this.selectionService.selectedItemChanged$.next({
        item: item,
        sender: this.type,
      });
    }
  }

  ngOnInit() {}
}
