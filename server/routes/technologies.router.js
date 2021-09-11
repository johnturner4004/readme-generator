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

router.get('/selected', async (req, res) => {
  const client = await pool.connect();
  try {
    client.query('BEGIN');  
    console.log(req.query.reqArray);
    let inArray = req.query.reqArray;
    let sqlText = `SELECT * FROM technologieslist WHERE id = $1`;
    let outArray = []
    for (let id of inArray) {
      let data = await client.query(sqlText, [id]);
      outArray.push(data.rows[0]);
    } 
    console.log(outArray);
    res.send(outArray);
    client.query('COMMIT')
  } catch (error) {
    console.log(`Unable to retrieve selected technologies from database: ${error}`)
    res.sendStatus(500);
  } finally {
    client.release();
  }
  
})

module.exports = router;