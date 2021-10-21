import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './layout/Header';
import UserProtectedRoute from './ProtectedRoutes/UserProtectedRoute';
import Generator from './views/Generator';
import Login from './views/Login';
import Registration from './views/Profile';
import ProjectSelect from './views/ProjectSelect';
import Loading from './views/Loading';

const useStyles = makeStyles({
  page: {
    padding: 0,
    margin: 0,
    width: '100vw',
    maxWidth: '100vw',
  },
  paper: {
    paddingBottom: 40,
    paddingTop: 20,
    margin: 20,
    height: '100%',
  },
});

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch({ type: 'FETCH_MY_FILES' });
  }, [dispatch]);

  return (
    <Container className={classes.page}>
      <Header />
      <Router>
        <Switch>
          <Redirect exact from='/' to='/login' />
          <UserProtectedRoute
            exact
            path='/login'
            authRedirect='/project-select'
          >
            <Login />
          </UserProtectedRoute>
          <UserProtectedRoute exact path='/generator/:id'>
            <Generator />
          </UserProtectedRoute>
          <UserProtectedRoute exact path='/project-select'>
            <ProjectSelect />
          </UserProtectedRoute>
          <Route exact path='/registration'>
            <Registration />
          </Route>
          <UserProtectedRoute exact path='/loading'>
            <Loading />
          </UserProtectedRoute>
          <Route>
            <Typography variant='h2'>404</Typography>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
