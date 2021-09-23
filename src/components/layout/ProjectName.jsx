import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  title: {
    padding: 10,
    textAlign: 'center',
  }
})

export default function ProjectName() {
  const classes = useStyles();

  return(
    <Typography className={classes.title} variant='h2'>Project Name</Typography>
  )
}