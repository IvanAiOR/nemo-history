const { request, response } = require('express');
const { ResponseServerError } = require('../helpers/response-return') ;
const { All, First} = require('../models/symbol') ;

const ReturnSymbols = (req = request, res = response) => {
    try {

        const allSymbols = All()
        if (allSymbols.error!=null) {
            ResponseServerError(res,{msg:`Can't return the list of symbols`, error})
        }
        res.status(200).json({
            allSymbols
        });
    } catch (error) {
        ResponseServerError(res,{msg:`Can't return the list of symbols `, error})
    }    
}

const ReturnSymbolsByName = (req = request, res = response) => {
    try {
        const paramSymbol = req.params.symbol;
        const FoundSymbol = First(paramSymbol);
        if (FoundSymbol.error!=null) {
            ResponseServerError(res,{msg:`Can't return the symbols found`, error});
        }
        res.status(200).json({
            data:FoundSymbol
        });
    } catch (error) {
        ResponseServerError(res,{msg:`Can't return the data, internal error`, error});
    }    
}






module.exports =  {
    ReturnSymbols,
    ReturnSymbolsByName
}