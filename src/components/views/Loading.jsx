import { makeStyles } from '@material-ui/core';
import GridLoader from 'react-spinners/GridLoader';
import { theme } from '../../Theme/Theme';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

const useStyles = makeStyles({
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  spacing: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default function Loading() {
  const classes = useStyles();
  const history = useHistory();

  const file = useSelector((state) => state.readme.selected);

  // const loading = () => {
  //   if (file.id) {
  //     history.push(`/generator/${file.id}`)
  //   } else {
  //     setTimeout(loading, 1000);
  //   };
  // };

  // useEffect(() => {
  //   loading();
  // }, [loading]);

  return (
    <Container className={classes.center} >
      <Container className={classes.spacing} >
        <Typography variant='h2'>Creating new readme file</Typography>
      </Container>
      <Container className={classes.spacing}>
        <GridLoader
          sizeUnit={'px'}
          size={50}
          loading={true}
          color={theme.palette.primary.main}
        />
      </Container>
    </Container>
  );
}
