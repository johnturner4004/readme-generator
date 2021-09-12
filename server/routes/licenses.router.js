const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/list', (req, res) => {
  const sqlText = `SELECT * FROM licenses`;
  pool.query(sqlText)
  .then (result => {
    res.send(result.rows)
  })
  .catch(error => {
    console.log(`Unable to get the license list: ${error}`)
  });
})

module.exports = router;