const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

const technologiesRouter = require('./routes/technologies.router');
const licensesRouter = require('./routes/licenses.router');
const userRouter = require('./routes/user.router')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/technologies', technologiesRouter);
app.use('/api/licenses', licensesRouter);
app.use('/api/user', userRouter);

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});