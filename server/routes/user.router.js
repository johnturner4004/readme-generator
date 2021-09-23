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
  const sqlText = `INSERT INTO "user" (username, password,first_name, last_name,  accountlevel, githubid, linkedinurl, email)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)`;

    console.log(`in profile router`)

  const profile = req.body;
  
  const username = profile.username;
  const password = encryptLib.encryptPassword(profile.password);
  const firstName = profile.firstName;
  const lastName = profile.lastName;
  const accountLevel = 1;
  const githubid = profile.github;
  const linkedinurl = profile.linkedin;
  const email = profile.email;
  
  pool.query(sqlText, [username, password, firstName, lastName, accountLevel, githubid, linkedinurl, email])
  .then(() => {
    res.sendStatus(201);
  })
  .catch(error => {
    console.log(`Error adding user: ${error}`);
  });
});

module.exports = router;