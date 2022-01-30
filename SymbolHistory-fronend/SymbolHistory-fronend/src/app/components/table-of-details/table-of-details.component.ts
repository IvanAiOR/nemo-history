import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HistoricalI } from 'src/app/interfaces/historical.inteface';
import { historicalDateI } from 'src/app/interfaces/historicalDate.interface';
import { Historical } from 'src/app/models/historical.model';
import { HistoricalDate } from 'src/app/models/historicalDate.model';
import { ApiServices } from 'src/app/services/api/api.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'table-of-details',
  templateUrl: './table-of-details.component.html',
  styleUrls: ['./table-of-details.component.css']
})
export class TableOfDetailsComponent implements OnInit {

  AnyArray:any = [];
  public Historical:Historical = new Historical({symbol:"",historical: new Array<historicalDateI>()});
  constructor(private api:ApiServices,private communicacion:CommunicationService) { 

  }

  async ngOnInit(): Promise<void> {
    this.communicacion.HistoricalData$.subscribe(SymbolHistorical =>this.Historical = SymbolHistorical )
  }
    
      
      
  
}
