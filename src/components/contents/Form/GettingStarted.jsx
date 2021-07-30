import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function GettingStarted() {
  const dispatch = useDispatch();
  const [gettingStarted, setGettingStarted] = useState('In the following sections, the prerequisites that need to be installed to run this project on your computer and steps to install it are listed.');
  const [prerequisites, setPrerequisites] = useState('');
  const [installation, setInstallation] = useState('');

  const handleBlur = () => {
    let gettingStartedCode = 
`## Getting Started

${gettingStarted}

### Prerequisites

${prerequisites}

### Installation

${installation}

`;
    dispatch({ type: 'UPDATE_GETTING_STARTED', payload: gettingStartedCode });
  }

  useEffect(() => {
    handleBlur();
  }, []);

  return (
    <>
      <TextareaAutosize value={gettingStarted} onChange={(event)  => setGettingStarted(event.target.value)} onBlur={() => handleBlur()} minRows={5} placeholder="Gettng Started" />
      <TextareaAutosize onChange={(event) => setPrerequisites(event.target.value)} onBlur={() => handleBlur()} minRows={5} placeholder="Prerequisites" />
      <TextareaAutosize onChange={(event) => setInstallation(event.target.value)} onBlur={() => handleBlur()} minRows={5} placeholder="Installation" />
    </>
  )
}