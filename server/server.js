const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const technologieslistRouter = require('./routes/technologiesList.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.use('/api/technologieslist', technologieslistRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});