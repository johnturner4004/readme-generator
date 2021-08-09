import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/styles/makeStyles';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  column: {
    display: 'flex',
    flexDirection: 'column',
    width: '33%',
  },
  spacing: {
    padding: '10px',
  },
}));


export default function Shields() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [githubUser, setGithubUser] = useState('johnturner4004');
  const [githubRepo, setGithubRepo] = useState('readme-generator');

  
  function handleBlur() {
    let shieldCode =`![License](https://img.shields.io/github/license/${githubUser}/${githubRepo}.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/${githubUser}/${githubRepo}.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/${githubUser}/${githubRepo}.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/${githubUser}/${githubRepo}.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/${githubUser}/${githubRepo}.svg?style=for-the-badge)`;

    dispatch({ type: 'UPDATE_SHIELD', payload: shieldCode });
  }

  useEffect(() => {
    handleBlur();
  }, []);

  return (
    <>
    <div className={classes.column}>
      <TextField className={classes.spacing} variant="outlined" onChange={(event)  => setGithubUser(event.target.value)} onBlur={() => handleBlur()} label="Github Username" />
      <TextField className={classes.spacing} variant="outlined" onChange={(event)  => setGithubRepo(event.target.value)} onBlur={() => handleBlur()} label="Github Repository Name" />
      </div>
    </>
  );
}