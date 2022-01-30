const { request, response } = require('express');
const { ResponseServerError } = require('../helpers/response-return') ;
const { All, First} = require('../models/historical') ;

const ReturnHistorical = (req = request, res = response) => {
    try {

        const allHistorical = All()
        if (allHistorical.error!=null) {
            ResponseServerError(res,{msg:`Can't return the list of symbols`, error})
        }
        res.status(200).json({
            data: allHistorical
        });
    } catch (error) {
        ResponseServerError(res,{msg:`Can't return the list of symbols `, error})
    }    
}

const ReturnHistoricalBySymbolName = (req = request, res = response) => {
    try {
        const paramSymbol = req.params.symbol;
        const foundHistorical = First(paramSymbol);
        if (foundHistorical.error!=null) {
            ResponseServerError(res,{msg:`Can't return the historical found`, error});
        }
        res.status(200).json({
            data:foundHistorical
        });
    } catch (error) {
        ResponseServerError(res,{msg:`Can't return the data, internal error`, error});
    }    
}






module.exports =  {
    ReturnHistorical,
    ReturnHistoricalBySymbolName
}