const express = require('express');
const app = express();
const env = require('dotenv');
const cors = require('cors');

env.config();
app.use(cors());
app.use(express.json());

app.use('/api/symbols', require('./routes/symbolsRoutes'));
app.use('/api/historical', require('./routes/historicalRoutes'));

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}/`);
});