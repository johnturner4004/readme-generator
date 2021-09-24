import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useStyles = makeStyles({
  paper: {
    paddingTop: 20,
    margin: 20,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function ProjectList() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_MY_FILES' })
  }, [dispatch])

  return (
    <Paper className={classes.paper}>
      <Typography>HELLO</Typography>
    </Paper>
  );
}
