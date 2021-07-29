import { Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  formCard: {
    padding: 10,
    margin: 10,
  },
});


export default function Form() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [projectName, setProjectName] = useState('Project Name')
  const [githubUser, setGithubUser] = useState('johnturner4004')
  const [githubRepo, setGithubRepo] = useState('readme-generator')
  const [linkedInId, setLinkedInId] = useState('johnturner4004')
  const test = useSelector(state => state.textInput.test);

  useEffect(() => {
    handleBlur()
  }, []);

  const handleBlur = () => {
    let code = (
`![License](https://img.shields.io/github/license/${githubUser}/${githubRepo}.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/${githubUser}/${githubRepo}.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/${githubUser}/${githubRepo}.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/${githubUser}/${githubRepo}.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/${githubUser}/${githubRepo}.svg?style=for-the-badge) 

# ${projectName}

## Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description

## Screenshots

## Built With

## Getting Started
  ### Prerequisites

  ### Installation

## Usage

## License

## Acknowledgements

## Contacts

<a href="https://www.linkedin.com/in/${linkedInId}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>`
    );
    dispatch({ type: 'UPDATE_TEXT' , payload: { code: code } })
  }

  return (
    <Card className={classes.formCard}>
    <TextField value={projectName} onChange={(event)  => setProjectName(event.target.value)} onBlur={() => handleBlur()} label="Project name" />
    </Card>
  )
}