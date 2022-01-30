const {Router} = require('express');
const { ReturnSymbols,ReturnSymbolsByName } = require('../controllers/symbolController') ;
const router = Router();

router.get('/',ReturnSymbols);
router.get('/:symbol',ReturnSymbolsByName);

module.exports = router;