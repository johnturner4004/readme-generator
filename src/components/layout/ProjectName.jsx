import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

const useStyles = makeStyles({
  title: {
    padding: 10,
    textAlign: 'center',
  },
});

export default function ProjectName() {
  const classes = useStyles();
  const pathIn = useParams();
  const pathId = Number(pathIn.id);
  const dispatch = useDispatch();

  const file = useSelector((store) => store.readme.selected[0]);

  
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
    <Typography className={classes.title} variant='h2'>
      {file ? file.project_name : ''}
    </Typography>
  );
}
