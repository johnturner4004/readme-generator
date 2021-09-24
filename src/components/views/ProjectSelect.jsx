import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  paper: {
    padding: 20,
    margin: 20,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minWidth: '400px',
    width: 'fit-contents',
    padding: 20,
  },
  text: {
    padding: 10,
  },
  button: {
    margin: 10,
  },
});

export default function ProjectSelect() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const [readmeId, setReadmeId] = useState('');
  const [newProjectName, setNewProjectName] = useState('');
  const [disableText, setDisableText] = useState(false);
  const [disableSelect, setDisableSelect] = useState(false);
  const [textHelper, setTextHelper] = useState('');
  const [selectHelper, setSelectHelper] = useState('');
  const [error, setError] = useState(false)

  const inputHelper = 'You can only use one input. Clear current selection to change'
  const missingInput = 'You must either enter a project name or select an readme'
  
  const existingProjects = useSelector((store) => store.readme.files);
  
  const disableInputs = (text, id) => {
    if (id !== '') {
      setDisableText(true);
      setTextHelper(inputHelper);
      setSelectHelper('');
      setError(false);
    } else if (text !== '') {
      setDisableSelect(true);
      setSelectHelper(inputHelper);
      setTextHelper('');
      setError(false);
    } else {
      setDisableSelect(false);
      setDisableText(false);
      setTextHelper('');
      setSelectHelper('');
      setError(false);
    };
  };
  
  const handleTextChange = (event) => {
    setNewProjectName(event.target.value);
    disableInputs(event.target.value, '');
  }

  const handleSelectChange = (event) => {
    setReadmeId(event.target.value);
    disableInputs('', event.target.value);
  };

  const handleSubmit = () => {
    if (newProjectName !== '') {
    
    } else if (readmeId !== '') {
    dispatch({ type: 'FETCH_SELECTED_FILE', payload: readmeId});
    } else {
      setTextHelper(missingInput);
      setSelectHelper(missingInput);
      setError(true)
    };
  };

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <Typography className={classes.text} variant='h4' component='p'>
          Would you like to
        </Typography>
        <TextField
          fullWidth
          variant='outlined'
          id='newReadme'
          label='Create new readme'
          onChange={handleTextChange}
          disabled={disableText}
          error={error}
          helperText={textHelper}
        />
        <Typography className={classes.text} variant='h4' component='p'>
          or
        </Typography>
        <TextField
          select
          fullWidth
          sx={{ minWidth: '250px' }}
          variant='outlined'
          id='existingReadme'
          value={readmeId}
          label={'Edit existing readme'}
          onChange={handleSelectChange}
          disabled={disableSelect}
          error={error}
          helperText={selectHelper}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {existingProjects ? existingProjects.map((file) => {
            return(
            <MenuItem value={file.id} key={file.id}>{file.project_name}</MenuItem>
          )}):''}
        </TextField>
        <Button className={classes.button} variant='contained' color='primary' onClick={handleSubmit}>
          Submit
        </Button>
      </Card>
    </Paper>
  );
}
