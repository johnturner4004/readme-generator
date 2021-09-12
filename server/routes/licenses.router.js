const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/list', (req, res) => {
  const sqlText = `SELECT * FROM licenses ORDER BY name DESC`;
  pool.query(sqlText)
  .then (result => {
    res.send(result.rows)
  })
  .catch(error => {
    console.log(`Unable to get the license list: ${error}`)
  });
})

router.get('/:id', (req, res) => {
  const sqlText = `SELECT * FROM licenses WHERE id = $1`;
  const id = req.params.id;
  pool.query(sqlText, [id])
  .then (result => {
    res.send(result.rows)
  })
  .catch (error => {
    console.log(`Unable to get selected license: ${error}`);
  });
})

module.exports = router;