import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
    padding: "10px",
  },
}));

//project name

//github repo
//description
//image url
//getting started
//prerequisites
//installation
//usage
//acknowledgements

export default function ProjectData() {
  const classes = useStyles();

  return(
    <Container className={classes.column}>
      <Typography variant='h3' component='h2'>Project Data</Typography>
      <TextField className={classes.spacing} variant='outlined' id='githubRepo' label='Github Repository Name' />
      <TextField className={classes.spacing} variant='outlined' id='description' label='Description' />
      <TextField className={classes.spacing} variant='outlined' id='githubRepo' label='Github Repository Name' />
      <TextField className={classes.spacing} variant='outlined' id='githubRepo' label='Github Repository Name' />
      <TextField className={classes.spacing} variant='outlined' id='githubRepo' label='Github Repository Name' />
    </Container>
  )
}