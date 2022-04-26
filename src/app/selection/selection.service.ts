import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SelectionService {
  private _selectedItemChanged = new Subject<any>();

  public get selectedItemChanged$() {
    console.log('BehaviorSubject updated');
    return this._selectedItemChanged;
  }
}
