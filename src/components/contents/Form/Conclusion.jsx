import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

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

  return(
    <>
      <TextareaAutosize onChange={(event) => setAcknowledgement(event.target.value)} onBlur={() => handleBlur()} label="Acknowledgements" />
      <TextField onChange={(event) => setLinkedIn(event.target.value)} onBlur={() => handleBlur()} label="LinkedIn username" />
      <TextField onChange={(event) => setEmail(event.target.value)} onBlur={() => handleBlur()} label="Email Address" />
    </>
  )
}