import { Photo } from './Photo';
import {Moment} from 'moment';
export interface Ad {
    id: number;
    name: string;
    price: number;
    city: string;
    availablefrom: Date;
    availabletill: Date;
    photoUrl: string;
    facilities?: string;
    photos?: Photo[];
}
