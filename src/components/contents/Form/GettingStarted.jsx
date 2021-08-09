import { TextField } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function GettingStarted() {
  const dispatch = useDispatch();
  const [gettingStarted, setGettingStarted] = useState(
    "In the following sections, the prerequisites that need to be installed to run this project on your computer and steps to install it are listed."
  );
  const [prerequisites, setPrerequisites] = useState("");
  const [installation, setInstallation] = useState("");
  const [usage, setUsage] = useState("");

  const handleBlur = () => {
    let gettingStartedCode = `## Getting Started

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
        multiline
        minRows={2}
        variant="outlined"
        label="Getting Started"
        onChange={(event) => setGettingStarted(event.target.value)}
        onBlur={() => handleBlur()}
        minRows={5}
        placeholder="Put anything a person would need to know before attempting to replicate you project"
      />
      <TextField
        multiline
        minRows={2}
        variant="outlined"
        onChange={(event) => setPrerequisites(event.target.value)}
        onBlur={() => handleBlur()}
        minRows={5}
        label="Prerequisites"
        placeholder="List any software, installation instructions for that software, and/or sources for that software that a person would need to install before attempting to replicate your project"
      />
      <TextField
        multiline
        minRows={2}
        variant="outlined"
        onChange={(event) => setInstallation(event.target.value)}
        onBlur={() => handleBlur()}
        minRows={5}
        label="Installation"
        placeholder="List the instructions a person would need to follow to get your project up and running"
      />
      <TextField
        multiline
        minRows={2}
        variant="outlined"
        onChange={(event) => setUsage(event.target.value)}
        onBlur={() => handleBlur()}
        minRows={5}
        label="Usage"
        placeholder="Tell a person how to use your project. List steps if necessary to use your project"
      />
    </>
  );
}
