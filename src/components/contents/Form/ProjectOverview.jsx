import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { useEffect } from 'react';


export default function ProjectOverview() {
  const dispatch = useDispatch();

  const [projectName, setProjectName] = useState('Project Name');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleBlur = () => {
    let projectOverviewCode = 
`# ${projectName}

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

${imageUrl}`;

    dispatch({ type: 'UPDATE_OVERVIEW', payload: projectOverviewCode });
  };

  useEffect(() => {
    handleBlur();
  }, []);

  return (
    <>
      <TextField onChange={(event)  => setProjectName(event.target.value)} onBlur={() => handleBlur()} label="Project name" />
      <TextareaAutosize onChange={(event) => setDescription(event.target.value)} onBlur={() => handleBlur()} minRows={5} placeholder="Description"></TextareaAutosize>
      <TextField onChange={(event) => setImageUrl(`<img src="${event.target.value}" />`)} onBlur={() => handleBlur()} label="Image URL" />
    </>
  )
}