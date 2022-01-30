import { historicalDateI } from "../interfaces/historicalDate.interface";

export class HistoricalDate implements historicalDateI{
    date!: Date;
    close!: number;
    constructor(DateFromAPI:any){
        Object.assign(this,DateFromAPI);
    }
}