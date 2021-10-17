import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import CodeDisplay from '../layout/CodeDisplay';
import Form from '../layout/Form';
import MDPreview from '../layout/MDPreview';
import ProjectName from '../layout/ProjectName';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  page: {
    padding: 0,
    margin: 0,
    width: '100vw',
  },
  paper: {
    paddingBottom: 40,
    paddingTop: 20,
    margin: 20,
    height: '100%',
  },
  gridContainer: {
    padding: 10,
  },
});

export default function Generator() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pathIn = useParams();
  const pathId = Number(pathIn.id);

  const file = useSelector(store => store.readme.selected[0]);

  useEffect(() => {
    const checkId = (id) => {
      id = Number(id);
      if (id) {
        dispatch({ type: 'FETCH_SELECTED_FILE', payload: { id: id } });
      } 
    };
    checkId(Number(pathId) !== 0 ? Number(pathId) : '');
  }, [pathId, dispatch]);

  return (
    <Paper className={classes.paper}>
      <ProjectName />
      {file ? <Form file={file} /> : ''}
      <Grid container className={classes.gridContainer} direction='row'>
        <Grid item xs={12} sm={6}>
          {file ? <CodeDisplay file={file} /> : ''}
        </Grid>
        <Grid item xs={12} sm={6}>
          {file ? <MDPreview file={file} /> : ''}
        </Grid>
      </Grid>
    </Paper>
  );
}
