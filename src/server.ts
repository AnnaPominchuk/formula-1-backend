const express = require('express');
//const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const driversRest = require('./rest/driversRest');
const { readDb } = require('./db');

require('dotenv').config();
const port = process.env.port || 8000;

const app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use('/api', cors());
const driversData = readDb();
app.locals.drivers = driversData;

app.get('/api/drivers', driversRest.drivers);
app.post('/api/drivers/:driverId/overtake', driversRest.overtake);

app.listen(port, () => {
  console.log('Server started on port 8000');
});
