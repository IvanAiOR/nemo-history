const HistoricalFile  =  require( "../helpers/historical-file-reader");
const historical = {};

historical.All = () => {
    if(HistoricalFile.error!=null ){
        return {error: HistoricalFile.error} ;
    }
    const data = HistoricalFile.json.historicalStockList;
    return data;
}

historical.First = (cronym = "") => {
   
    if(HistoricalFile.error!=null ){
        return {error: HistoricalFile.error} ;
    }
    const data = HistoricalFile.json.historicalStockList.find(DataBaseSymbol => DataBaseSymbol.symbol.toLocaleLowerCase() == cronym.toLocaleLowerCase()) ;
    return data;

}
module.exports = historical;