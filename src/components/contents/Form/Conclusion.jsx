import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

export default function Conclusion() {
  return(
    <>
      <TextareaAutosize label="Acknowledgements" />
      <TextField label="LinkedIn username" />
      <TextField label="Email Address" />
    </>
  )
}