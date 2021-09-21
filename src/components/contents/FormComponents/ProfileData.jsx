import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
  column: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "67%",
  },
  spacing: {
    margin: 10,
  },
}));

export default function ProjectOverview() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = useSelector(store => store.user)

  const [githubId, setGithubId] = useState(user.github);
  const [linkedInId, setLinedInId] = useState(user.linkedin);
  const [email, setEmail] = useState(user.email);

  return (
    <Container className={classes.column}>
      <Typography variant='h3' component='h2'>Profile Data</Typography>
      <Typography variant='body1'>This is information stored in your user profile. In most projects it will be the same however there may where there may be an exception to that. For instance if you are writing a readme for a joint project that is stored in someone elses Github account you will want to change the Github username to their username so it generates the correct shields. Otherwise they will all read either "0" or "none" depending on which shield it is.</Typography>
      <TextField className={classes.spacing} variant='outlined' id='githubId' value={githubId} label='Github Username' />
      <TextField className={classes.spacing} variant='outlined' id='linkedInId' value={linkedInId} label='LinkedIn URL' />
      <TextField className={classes.spacing} variant='outlined' id='email' value={email} label='Email' />
    </Container>
  );
}