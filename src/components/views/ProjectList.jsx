import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';

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
    minWidth: '300px',
    width: 'fit-contents',
    padding: 20,
  },
  text: {
    padding: 10,
  },
  button: {
    margin: 10,
  }
});

export default function ProjectList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [readmeId, setReadmeId] = useState();

  useEffect(() => {
    dispatch({ type: 'FETCH_MY_FILES' });
  }, [dispatch]);

  const handleChange = (event) => {
    setReadmeId(event.target.value);
  };

  return (
    <Paper className={classes.paper}>
      <Card className={classes.card}>
        <Typography className={classes.text} variant='h4' component='body1'>
          Would you like to
        </Typography>
        <TextField
          fullWidth
          variant='outlined'
          id='newReadme'
          label='Create new readme'
        />
        <Typography className={classes.text} variant='h4' component='body1'>
          or
        </Typography>
        <TextField
          select
          fullWidth
          sx={{ minWidth: '250px' }}
          labelId='existingReadmeLabel'
          variant='outlined'
          id='existingReadme'
          value={readmeId}
          label={'Edit existing readme'}
          onChange={handleChange}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Test'}>Test</MenuItem>
        </TextField>
        <Button className={classes.button} variant='contained' color='primary'>Submit</Button>
      </Card>
    </Paper>
  );
}
