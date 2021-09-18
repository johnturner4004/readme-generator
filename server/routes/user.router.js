const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const userStrategy = require('../strategies/user.strategy');
const pool = require('../modules/pool');
const encryptLib = require('../modules/encryption');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  res.send(req.user);
})

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
})

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200)
})

router.post('/profile', (req, res) => {
  const sqlText = `INSERT INTO "user" (username, password, accountlevel, email, github, linkedin)
    VALUES($1, $2, $3, $4, $5, $6)`;

  const profile = req.body;
  
  const username = profile.username;
  const password = encryptLib.encryptPassword(profile.password);
  const accountLevel = 1;
  const email = profile.email;
  const github = profile.github;
  const linkedin = profile.linkedin;
  
  pool.query(sqlText, [username, password, accountLevel, email, github, linkedin])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(error => {
    console.log(`Error adding user: ${error}`);
  });
});

module.exports = router;