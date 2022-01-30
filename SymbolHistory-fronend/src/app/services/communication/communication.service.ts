import { EventEmitter, Injectable } from '@angular/core';
import { HistoricalI } from 'src/app/interfaces/historical.inteface';
import { Historical } from 'src/app/models/historical.model';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  
  HistoricalData$ = new EventEmitter<Historical>();    

  constructor() { }

  
}
