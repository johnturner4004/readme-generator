import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  paper: {
    paddingBottom: 40,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    margin: 20,
    height: "100%",
    display: "flex",
  },
  card: {
    padding: 10,
    width: "50%",
    margin: 10,
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
  },
  spacing: {
    margin: 10,
  },
});

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(`username: ${username}, password: ${password}`)

  function handleSubmit() {
    dispatch({ type: 'LOGIN', payload: { username: username, password: password}});
  }

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <Typography variant="h3" component="h2">
          Welcome
        </Typography>
        <Typography>
          Thank you for choosing to use my Readme.md Generator. We just went
          through our first major update. After using it myself for a few of my
          projects I realized that updating existing readme files was a bit of a
          hassle. For ones that already existed before you started using the
          app, I haven't come up with a good solution yet (but it is on my to do
          list), but for ones made using the app going forward, I decided it
          would be much more efficient to simply save the information we've
          already entered so we could easily update it later. Now with saving
          data of any kind there always comes security risks. I certainly
          wouldn't want anyone messing with my readme's so in addition to saving
          your info to be able to update in it I've also added user accounts! As
          always please feel free to reach out to me for feature requests.
        </Typography>
      </Card>
      <Card className={classes.card}>
        <Container className={classes.loginForm}>
          <Typography variant="h3" component="h2">Login</Typography>
          <TextField className={classes.spacing} id="username" label="username" variant="outlined" onChange={(event) => setUsername(event.target.value)}/>
          <TextField className={classes.spacing} id="username" label="password" variant="outlined" onChange={(event) => setPassword(event.target.value)}/>
          <Button className={classes.spacing} id="submit" color="primary" variant="contained" onClick={() => handleSubmit()}>Submit</Button>
        </Container>
      </Card>
    </Paper>
  );
};