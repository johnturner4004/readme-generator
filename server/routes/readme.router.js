const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware'); 

router.get('/', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT rd.*, json_agg(tl.*) AS technologies_used, json_agg(l.*) AS selected_license FROM readmedata AS rd 
	LEFT JOIN licenses AS l ON rd.licenseid = l.id
	LEFT JOIN techjoin AS tj ON rd.id = tj.readmeid
	LEFT JOIN technologieslist AS tl ON tj.techid = tl.id
	WHERE rd.userid = $1
	GROUP BY rd.id
	ORDER BY rd.id ASC;`

  const userid = req.user.id;

  pool.query(sqlText, [userid])
  .then(result => {
    res.send(result.rows)
  })
  .catch(error => {
    console.log(`Error querying readme files: ${error}`)
  });
});

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const sqlText = `SELECT rd.*, json_agg(tl.*), l.* FROM readmedata AS rd 
	LEFT JOIN licenses AS l ON rd.licenseid = l.id
	LEFT JOIN techjoin AS tj ON rd.id = tj.readmeid
	LEFT JOIN technologieslist AS tl ON tj.techid = tl.id
	WHERE rd.userid = $1 AND rd.id = $2
	GROUP BY rd.id, l.id;`

  const userid = req.user.id;
  const id = req.params.id;

  pool.query(sqlText, [userid, id])
  .then(result => {
    res.send(result.rows);
  })
  .catch(error => {
    console.log(`Error querying selected readme file: ${error}`)
  });
});

router.post('/', (req, res) => {
  const sqlText = `INSERT INTO readmeData (userid, project_name)
	VALUES ($1, $2)
	RETURNING id;`;
  const userid = req.user.id;
  const projectName = req.body.project_name;

  pool.query(sqlText, [userid, projectName])
  .then(result => {
    res.send(result.rows)
  })
  .catch(error =>{
    console.log(`Error posting new readme: ${error}`)
  })
});

module.exports = router;