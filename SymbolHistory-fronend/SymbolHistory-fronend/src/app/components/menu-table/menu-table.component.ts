import { Component, OnInit } from '@angular/core';
import { SymbolI } from 'src/app/interfaces/symbol.inteface';
import { Symbol } from 'src/app/models/symbol.model';
import { ApiServices } from 'src/app/services/api/api.service';

@Component({
  selector: 'menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.css']
})
export class MenuTableComponent implements OnInit {
  AnyArray:any = [];
  list:SymbolI[] = [];
 
  constructor(private api:ApiServices ){
    
    
  }

  async ngOnInit(): Promise<void> {
    this.AnyArray = await this.api.getDataFromSymbol().toPromise();
    
    this.list  = this.AnyArray.allSymbols.map((sym:any)=> { return new Symbol(sym)}) ;
  }

}
