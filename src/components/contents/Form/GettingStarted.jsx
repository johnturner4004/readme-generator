import { TextField } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
  spacing: {
    padding: '10px',
    width: 'calc(25% - 20px)',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
  },
}));

export default function GettingStarted() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [gettingStarted, setGettingStarted] = useState("What do I need to do or know before attempting to use your project");
  const [prerequisites, setPrerequisites] = useState("What do I need to install before I can run your project");
  const [installation, setInstallation] = useState("How do I get your project running?");
  const [usage, setUsage] = useState("How do I use your project");

  const handleBlur = () => {
    let gettingStartedCode = `

## Getting Started

${gettingStarted}

### Prerequisites

${prerequisites}

### Installation

${installation}

## Usage

${usage}

`;
    dispatch({ type: "UPDATE_GETTING_STARTED", payload: gettingStartedCode });
  };

  useEffect(() => {
    handleBlur();
  }, []);

  return (
    <>
      <TextField
      className={classes.spacing}
        multiline
        variant="outlined"
        label="Getting Started"
        onChange={(event) => setGettingStarted(event.target.value)}
        onBlur={() => handleBlur()}
        minRows={8}
        placeholder="Put anything a person would need to know before attempting to replicate you project"
      />
      <TextField
        className={classes.spacing}
        multiline
        variant="outlined"
        onChange={(event) => setPrerequisites(event.target.value)}
        onBlur={() => handleBlur()}
        minRows={8}
        label="Prerequisites"
        placeholder="List any software, installation instructions for that software, and/or sources for that software that a person would need to install before attempting to replicate your project"
      />
      <TextField
        className={classes.spacing}
        multiline
        variant="outlined"
        onChange={(event) => setInstallation(event.target.value)}
        onBlur={() => handleBlur()}
        minRows={8}
        label="Installation"
        placeholder="List the instructions a person would need to follow to get your project up and running"
      />
      <TextField
        className={classes.spacing}
        multiline
        variant="outlined"
        onChange={(event) => setUsage(event.target.value)}
        onBlur={() => handleBlur()}
        minRows={8}
        label="Usage"
        placeholder="Tell a person how to use your project. List steps if necessary to use your project"
      />
    </>
  );
}
