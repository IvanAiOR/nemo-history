import { Injectable } from "@angular/core";
import {  HttpClient,HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiServices {
    header:HttpHeaders = new HttpHeaders().set('Type-content','aplication/json') 
    constructor(private http:HttpClient) {
        
    }
    public getDataFromSymbol(symbol:string = '') {
        return this.http.get(environment.APIEndpoint+'/api/symbols/'+symbol,{headers:this.header});
    }
    public getDataFromHistorical(symbol:string) {
        
        return this.http.get(environment.APIEndpoint+'/api/historical/'+symbol,{headers:this.header});
        
    }
    
     
}