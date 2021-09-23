import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { theme } from '../../Theme/Theme'
import grey from "@material-ui/core/colors/grey";

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
    margin: "10px",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
    alignItems: "center",
    color: theme.palette.primary.main,
    transition: 'all 1s ease', 
    "&:hover": {
      backgroundColor: grey[200],
      boxShadow: '0 0 5px 5px' + grey[200]
    },
  }
}));

//project name

// DONE  github repo
// DONE description
// DONE image url
// CHANGE TO HEADER getting started
// DONE prerequisites
// DONE installation
// DONE usage
// DONE acknowledgements

export default function ProjectData() {
  const classes = useStyles();

  return(
    <Container className={classes.column}>
      <Typography 
      variant='h3'
      >
        Project Data
      </Typography>
      <TextField 
      className={classes.spacing} 
      variant='outlined' 
      id='githubRepo' 
      label='Github Repository Name' 
      />
      <TextField 
      multiline minRows={5} 
      className={classes.spacing} 
      variant='outlined' 
      id='description' 
      label='Description' 
      />
      <TextField 
      className={classes.spacing} 
      variant='outlined' 
      id='imageUrl'
      label='Image URL' 
      />
      {/* <Typography 
      variant='h4' c
      omponent='h3'
      >
        Getting Started
        </Typography> */}
      <TextField 
      multiline
      minRows={5} 
      className={classes.spacing} 
      variant='outlined' 
      id='prerequisites' 
      label='Prerequisites' 
      placeholder="List any software, installation instructions for that software, and/or sources for that software that a person would need to install before attempting to replicate your project"
      />
      <TextField 
      multiline
      minRows={5}
      className={classes.spacing} 
      variant='outlined' 
      id='installation' 
      label='Installation' 
      placeholder="List the instructions a person would need to follow to get your project up and running"
      />
      <TextField 
      multiline
      minRows={5}
      className={classes.spacing} 
      variant='outlined' 
      id='usage' 
      label='Usage' 
      placeholder="Tell a person how to use your project. List steps if necessary to use your project"
      />
      <TextField 
      multiline
      minRows={5}
      className={classes.spacing} 
      variant='outlined' 
      id='acknowledgments' 
      label='Acknowledgments' 
      placeholder='Who helped you make this project a reality? Friends? Family? Contributors? Instructors?'
      />
    </Container>
  )
}