import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

const useStyles = makeStyles({
  paper: {
    padding: 20,
    margin: 20,
    height: "100%",
    display: "flex",
  },
  spacing: {
    margin: 10,
  },
});

export default function Registration() {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  return(
  <Paper className={classes.paper}>
    <TextField className={classes.spacing} id="username" label="username" variant="outlined" onChange={(event) => setUsername(event)} />
    <TextField className={classes.spacing} type="password" id="password" label="password" variant="outlined" onChange={(event) => setPassword(event)} />
    <TextField className={classes.spacing} type="password" id="confirm" label="confirm password" variant="outlined" onChange={(event) => setPassword(event)} />
  </Paper>
  );
};