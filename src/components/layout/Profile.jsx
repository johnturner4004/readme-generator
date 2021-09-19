import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card'
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  paper: {
    paddingTop: 20,
    margin: 20,
    height: "100%",
    display: "flex",
    flexDirection: 'column',
  },
  spacing: {
    margin: 10,
  },
  row: {
    display: 'flex',
    maxWidth: '100vw',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  card: {
    padding: 10,
    margin: 10,
    width: '50%',
  },
  profileForm: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    margin: 13,
    marginTop:10,
  },
});

export default function Registration() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const handleSubmit = () => {
    const profile = {
      username: username,
      password: password,
      confirm: confirm,
      firstName: firstName,
      lastName: lastName,
      email: email,
      github: github,
      linkedin: linkedin,
    };

    dispatch({ type: 'NEW_PROFILE', payload: profile });
    history.push('/generator');
  }

  return(
  <Paper className={classes.paper}>
    <Container className={classes.row}>
      <Card className={classes.card}>
        <Container className={classes.profileForm}>
          <Typography className={classes.spacing} variant="h3" component="h2">Login Info</Typography>
          <TextField className={classes.spacing} id="username" label="username" variant="outlined" onChange={(event) => setUsername(event.target.value)} />
          <TextField className={classes.spacing} type="password" id="password" label="password" variant="outlined" onChange={(event) => setPassword(event.target.value)} />
          <TextField className={classes.spacing} type="password" id="confirm" label="confirm password" variant="outlined" onChange={(event) => setConfirm(event.target.value)} />
        </Container>
      </Card>
      <Card className={classes.card}>
        <Container className={classes.profileForm}>
        <Typography className={classes.spacing} variant="h3" component="h2">Personal Links</Typography>
          <TextField className={classes.spacing} id="firstName" label="first name" variant="outlined" onChange={(event) => setFirstName(event.target.value)} />
          <TextField className={classes.spacing} id="lastName" label="last name" variant="outlined" onChange={(event) => setLastName(event.target.value)} />
          <TextField className={classes.spacing} id="email" label="email address" variant="outlined" onChange={(event) => setEmail(event.target.value)} />
          <TextField className={classes.spacing} id="github" label="github url" variant="outlined" onChange={(event) => setGithub(event.target.value)} />
          <TextField className={classes.spacing} id="linkedin" label="linkedin url" variant="outlined" onChange={(event) => setLinkedin(event.target.value)} />
        </Container>
      </Card>
    </Container>
    <Container className={classes.row}>
      <Button className={classes.button} variant="contained" color="primary" onClick={() => handleSubmit()}>Submit</Button>
    </Container>
  </Paper>
  );
};