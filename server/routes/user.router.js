const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  res.send(req.user);
})

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
})

module.exports = router;