import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/styles/makeStyles';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Languages from '../assets/languages.json';

const useStyles = makeStyles({
  formCard: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  techList: {
    display: 'flex',
    flexDirection: 'column',
  },
});


export default function Form() {
  const [checked, setChecked] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState('Project Name');
  const [githubUser, setGithubUser] = useState('johnturner4004');
  const [githubRepo, setGithubRepo] = useState('readme-generator');
  const [linkedInId, setLinkedInId] = useState('johnturner4004');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [techIcon, setTechIcon] = useState([]);

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

${description}

## Screenshots

${imageUrl}

## Built With

${techIcon}

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
    
    function handleChange(event) {
      console.log(`checked = ${checked}`);
      let i = checked.indexOf(event.target.name);
      console.log(`i = ${i}`);
      if (i === -1) {
        setChecked([...checked, event.target.name]);
      } else {
        let temp = []
        for (let j = 0; j < checked.length; j++) {
          if (j !== i) {
            temp.push(checked[j])
          }
          setChecked(temp)
          console.log(`temp = ${temp}`)
        }
      }
    }
    
    useEffect(() => {
      handleBlur()
    }, []);

    return (
      <Card className={classes.formCard}>
      <TextField onChange={(event)  => setProjectName(event.target.value)} onBlur={() => handleBlur()} label="Project name" />
      <TextField onChange={(event)  => setGithubUser(event.target.value)} onBlur={() => handleBlur()} label="Github Username" />
      <TextField onChange={(event)  => setGithubRepo(event.target.value)} onBlur={() => handleBlur()} label="Github Repository Name" />
      <TextField onChange={(event)  => setLinkedInId(event.target.value)} onBlur={() => handleBlur()} label="LinkedIn Username" />
      <TextareaAutosize onChange={(event) => setDescription(event.target.value)} onBlur={() => handleBlur()} minRows={5} placeholder="Description"></TextareaAutosize>
      <TextField onChange={(event) => setImageUrl(`<img src="${event.target.value}" />`)} onBlur={() => handleBlur()} label="Image URL" />
      <FormControl>
      {Languages.map(language => {
        return (
          <div className={classes.techList} key={language.id}>
            <img src={language.image} alt={language.name} />
            <FormControlLabel 
              control={<Checkbox color="primary" 
                onChange={handleChange} 
                name={language.id} 
              />} 
              label={language.name} 
            />
          </div>
      )})}
      </FormControl>
      {JSON.stringify(checked)}
    </Card>
  )
}