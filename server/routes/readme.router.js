const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); 

router.get('/my-files', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT rd.*, array_agg(tl.*), l.* FROM readmedata AS rd 
	JOIN licenses AS l ON rd.licenseid = l.id
	JOIN techjoin AS tj ON rd.id = tj.readmeid
	JOIN technologieslist AS tl ON tj.techid = tl.id
	WHERE rd.userid = $1
	GROUP BY rd.id, l.id;`

  const userid = req.user.id;

  pool.query(sqlText, [userid])
  .then(result => {
    res.send(result.rows)
  })
  .catch(error => {
    console.log(`Error querying readme-files: ${error}`)
  })
})

module.exports = router;