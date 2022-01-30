const {Router} = require('express');
const { ReturnHistorical,ReturnHistoricalBySymbolName } = require('../controllers/historicalController') ;
const router = Router();

router.get('/',ReturnHistorical);
router.get('/:symbol',ReturnHistoricalBySymbolName);

module.exports = router;