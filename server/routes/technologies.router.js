const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/list', (req, res) => {
  const sqlText = `SELECT * FROM "technologieslist"`;
  pool.query(sqlText)
    .then(results => {
      res.send(results.rows);
    })
    .catch(error => {
      console.log(`Unable to get technologies list: ${error}`);
      res.sendStatus(500);
    })
}) 

router.get('/selected', (req, res) => {
  console.log(req.query)
})

module.exports = router;