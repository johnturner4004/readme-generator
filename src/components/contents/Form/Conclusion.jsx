import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Conclusion() {
  const dispatch = useDispatch();
  const [acknowledgement, setAcknowledgement] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [email, setEmail] = useState('');

  const handleBlur = () => {
    const conclusionCode = `
## Acknowledgements

${acknowledgement}

## Contacts

<a src=www.linkedin.com/in/${linkedIn}><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a src="mailto:${email}><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>`;

    dispatch({ type: 'SET_CONCLUSION', payload: conclusionCode });
  };

  useEffect(() => {
    handleBlur();
  }, []);

  return(
    <>
      <TextField variant="outlined" multiline rows={2} onChange={(event) => setAcknowledgement(event.target.value)} onBlur={() => handleBlur()} label="Acknowledgements" />
      <TextField variant="outlined" onChange={(event) => setLinkedIn(event.target.value)} onBlur={() => handleBlur()} label="LinkedIn username" />
      <TextField variant="outlined" onChange={(event) => setEmail(event.target.value)} onBlur={() => handleBlur()} label="Email Address" />
    </>
  )
}