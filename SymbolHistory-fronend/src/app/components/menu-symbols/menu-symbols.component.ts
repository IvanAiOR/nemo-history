import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { historicalDateI } from 'src/app/interfaces/historicalDate.interface';
import { SymbolI } from 'src/app/interfaces/symbol.inteface';
import { Historical } from 'src/app/models/historical.model';
import { HistoricalDate } from 'src/app/models/historicalDate.model';
import { ApiServices } from 'src/app/services/api/api.service';
import { CommunicationService } from 'src/app/services/communication/communication.service';

@Component({
  selector: 'menu-symbols',
  templateUrl: './menu-symbols.component.html',
  styleUrls: ['./menu-symbols.component.css']
})
export class MenuSymbolsComponent  implements OnInit, SymbolI {
   
   @Input()
  symbol!: string;
   @Input()
  name!: string;
   @Input()
  price!: number;
  AnyArray:any = [];
  public Historical:Historical = new Historical({symbol:"",historical: new Array<historicalDateI>()});


  constructor(private api:ApiServices, private communication:CommunicationService ){
 
  }
  
  
  ngOnInit(): void {
    
  }

  LoadSymbolData(symbol:string):void{
    this.api.getDataFromSymbol(symbol)
  }

  async OnTouchAnySymbol(symbol:string):Promise<void>{
    this.AnyArray =  await this.api.getDataFromHistorical(symbol).toPromise();
      this.Historical.symbol = this.AnyArray.data.symbol;
      let ListOfHistoricalDates = this.AnyArray.data.historical.map((hist:any)=>{return new HistoricalDate(hist)});
      this.Historical.historical = ListOfHistoricalDates;
    
    this.communication.HistoricalData$.emit(this.Historical);
  }

}
