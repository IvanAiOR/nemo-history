import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { historicalDateI } from 'src/app/interfaces/historicalDate.interface';
import { Historical } from 'src/app/models/historical.model';
import { CommunicationService } from 'src/app/services/communication/communication.service';
import { Chart,registerables } from "chart.js";

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class HistoricalChartComponent implements OnInit,AfterViewInit {

  public Historical:Historical = new Historical({symbol:"",historical: new Array<historicalDateI>()});
  public type:string = 'line';
  public data:any = {};
  public options:any = {}; 
  public canvas:any = {};
  public ctx:any = {};
  
  @ViewChild('mychart') chat:any;
  labels: string[] = [];
  historicalData: number[]=[];
  myChart!: Chart<"line", number[], string> ;

  constructor(private communicacion:CommunicationService) {
  }
  
  
  
  async ngOnInit(): Promise<void> {
    this.communicacion.HistoricalData$.subscribe((SymbolHistorical) =>{ this.onUpdateChartData(SymbolHistorical); });
    
  }
  onUpdateChartData(SymbolHistorical:Historical):void{
    this.Historical = SymbolHistorical; 
    console.log(this.Historical);
    this.labels = this.Historical.historical.map((element)=>{return element.date.toString()});
    this.historicalData = this.Historical.historical.map((element)=>{return element.close});
    this.myChart.data.datasets[0].data = this.historicalData;
    this.myChart.data.labels  = this.labels;
    this.myChart.update();
  }
  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.canvas = this.chat.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    this.myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Close price',
              data: this.historicalData,
              backgroundColor: "rgb(115 185 243 / 65%)",
              fill: true,
          }],
          labels: this.labels
      }
  });
  }

}
