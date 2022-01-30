const FileSymbols  =  require( "../helpers/symbol-file-reader");
const symbol = {};

symbol.All = () => {
    if(FileSymbols.error!=null ){
        return {error: FileSymbols.error} ;
    }
    const data = FileSymbols.json.symbolsList;
    return data;
}

symbol.First = (cronym = "") => {
   
    if(FileSymbols.error!=null ){
        return {error: FileSymbols.error} ;
    }
    const data = FileSymbols.json.historicalStockList.find(DataBaseSymbol => DataBaseSymbol.symbol.toLocaleLowerCase() == cronym.toLocaleLowerCase()) ;
    return data;

}
module.exports = symbol;