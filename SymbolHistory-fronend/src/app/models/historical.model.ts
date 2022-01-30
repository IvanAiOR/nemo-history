import { HistoricalI } from "../interfaces/historical.inteface";
import { historicalDateI } from "../interfaces/historicalDate.interface";
import { HistoricalDate } from "./historicalDate.model";

export class Historical implements HistoricalI{

    symbol: string = '';
    historical: HistoricalDate[]= new Array<HistoricalDate>();
    
    constructor(FromAPIObject:any){
        Object.assign(this,FromAPIObject);
    }
}