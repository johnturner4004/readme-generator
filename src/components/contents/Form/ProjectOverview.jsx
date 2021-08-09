import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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

export default function ProjectOverview() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [projectName, setProjectName] = useState("Project Name");
  const [description, setDescription] = useState("Project description goes here");
  const [imageUrl, setImageUrl] = useState("");

  const handleBlur = () => {
    let projectOverviewCode = `
    
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

<img src="${imageUrl}" />`;

    dispatch({ type: "UPDATE_OVERVIEW", payload: projectOverviewCode });
  };

  useEffect(() => {
    handleBlur();
  }, []);

  return (
    <>
    <div className={classes.row}>
      <div className={classes.column}>
      <TextField
      className={classes.spacing}
        variant="outlined"
        onChange={(event) => setProjectName(event.target.value)}
        onBlur={() => handleBlur()}
        label="Project name"
        placeholder="Not the repo name"
      />
        <TextField
          className={classes.spacing}
          variant="outlined"
          onChange={(event) => setImageUrl(`<img src="${event.target.value}" />`)}
          onBlur={() => handleBlur()}
          label="Image URL"
          placeholder="or relative path"
        />
        </div>
      <TextField
      className={clsx(classes.column, classes.spacing)}
        multiline
        minRows={5}
        variant="outlined"
        onChange={(event) => setDescription(event.target.value)}
        onBlur={() => handleBlur()}
        label="Description"
        placeholder="Give a detailed description of what your project does and what problem it solves. This is a great place to put a link to a deployed version of your project"
      />
      </div>
    </>
  );
}
