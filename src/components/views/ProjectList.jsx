import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';

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

  return (
    <Paper className={classes.paper}>
      <Typography>HELLO</Typography>
    </Paper>
  );
}
