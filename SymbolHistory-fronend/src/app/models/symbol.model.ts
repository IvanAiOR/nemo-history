import { SymbolI } from "../interfaces/symbol.inteface";

export class Symbol implements SymbolI{
    symbol!: string;
    name!: string;
    price!: number;
    constructor(itemFromAPI:any)
    {
        //short way to load a instance of this object, just send "this" instance and the api object.
        //How i create both project with the same names Typescript dont have problem to know where to put each variables
        Object.assign(this,itemFromAPI);
    }
} 