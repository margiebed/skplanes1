import { MatSnackBar } from '@angular/material';
import { FlightFormComponent } from './../flight-form/flight-form.component';
import { Component,  ViewChild } from '@angular/core';
import { FlightsService } from 'src/app/core/services/flights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Flight } from 'src/app/models/flight.models';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent  {

  @ViewChild('flightForm', {static: false}) flightForm: FlightFormComponent;
 flight: Flight;

  constructor(
    private route: ActivatedRoute,
    private flightsService: FlightsService,
    private router: Router,
    private toast: MatSnackBar
  ) { }

  editFlight(){
  this.flightsService.editFlight(this.flight.key, this.flightForm.form.value)
  .then(this.onEditSuccess.bind(this), this.onFailure.bind(this));
  }

  removeFlight() {
    
    this.flightsService.removeFlight(this.flight.key).then(
this.onRemoveSuccess.bind(this), this.onFailure.bind(this)
    );
  }

  private onEditSuccess() {
    this.router.navigate(['/dashboard/']);
    this.toast.open('Flight has been sucessfull edited', '', {panelClass: 'toast-success'});
  }

  private onRemoveSuccess() {
    this.router.navigate(['/dashboard/']);
    this.toast.open('Flight has been sucessfull removed', '', {panelClass: 'toast-success'});
  }
  private onFailure(error) {
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }

  ngAfterViewInit() {
    this.loadFlight();
  }


  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightsService.getFlight(key)
      .pipe(tap(flight => this.flightForm.setFlight(flight)))
      .subscribe(flight => this.flight = flight);
  }
}
