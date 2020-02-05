import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Flight } from 'src/app/models/Flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent {

  @Input() flight: Flight;
  math = Math;

  constructor(private cd: ChangeDetectorRef){
    this.cd.markForCheck();
  //   //lub detectChanges odświezy komponent z wszystkimi dziećmi
  //
}
}
