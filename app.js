const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const models = require('./server/models')

require('dotenv').config();
const portNumber = process.env.PORT || 4000

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.listen(portNumber)
require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome',
}));

module.exports = app;
