import { Crew } from './flight.models';
export interface Flight {
  additionalInformation: string;
  code: string;
  crew: Crew[];
  departureTime: string;
  destination: string;
  origin: string;
  returnTime: string;
  withSKPlanesDiscount: boolean;
  key: string;
}
