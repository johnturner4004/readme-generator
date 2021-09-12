const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const technologiesRouter = require('./routes/technologies.router');
const licensesRouter = require('./routes/licenses.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('build'));

app.use('/api/technologies', technologiesRouter);
app.use('/api/licenses', licensesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});