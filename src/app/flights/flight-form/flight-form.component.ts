import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Crew, Flight } from 'src/app/models/flight.models';
import { flightCodeValidator } from './code.validator';


@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
@Input() editMode = false;

  form: FormGroup;
  jobs = [
    { label: 'Stewardess', value: 'stewardess' },
    { label: 'Senior cabin crew', value: 'senior_cabin_crew' },
    { label: 'Pilot', value: 'pilot' },
    { label: 'Co-Pilot', value: 'co_pilot' },
    { label: 'Mechanic', value: 'mechanic' }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  setFlight(flight: Flight) {
const {key, ...formData} = flight;
this.form.patchValue(formData);
formData.crew.forEach(crewMember => this.addCrewMember(crewMember));
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember(crewMember));
    console.log(this.form);
  }

  buildCrewMember(crewMember: Crew = {} as Crew) {
    return this.formBuilder.group({
      name: crewMember.name || '',
      job: crewMember.job || ''
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      origin: ['', {validators:[Validators.required]}],
      destination: ['', {validators:[Validators.required]}],
      departureTime: ['', {validators:[Validators.required]}],
      returnTime:['', {validators:[Validators.required]}],
      code: ['SK', {validators:[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
        flightCodeValidator
      ]}],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
    });
  }
}
