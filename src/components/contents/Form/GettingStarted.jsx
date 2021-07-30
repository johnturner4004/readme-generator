import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";

let anything = 
`## Getting Started

### Prerequisites

### Installation`;


export default function GettingStarted() {
  const dispatch = useDispatch();
  const [gettingStarted, setGettingStarted] = useState('');
  const [prerequisites, setPrerequisites] = useState('');
  const [installation, setInstallation] = useState('');

  const handleBlur = () => {

  }

  return (
    <>
      <TextareaAutosize onChange={(event)  => setGettingStarted(event.target.value)} onBlur={() => handleBlur()} minRows={5} placeholder="Gettng Started" />
      <TextareaAutosize onChange={(event) => setPrerequisites(event.target.value)} onBlur={() => handleBlur()} minRows={5} placeholder="Prerequisites" />
      <TextareaAutosize onChange={(event) => setInstallation(event.target.value)} onBlur={() => handleBlur()} minRows={5} placeholder="Installation" />
    </>
  )
}