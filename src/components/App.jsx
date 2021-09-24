import Container from '@material-ui/core/Container';
import makeStyles from '@material-ui/styles/makeStyles';
import Header from './layout/Header';
import Login from './views/Login';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Generator from './views/Generator';
import UserProtectedRoute from './ProtectedRoutes/UserProtectedRoute';
import Registration from "./views/Profile";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProjectSelect from './views/ProjectSelect';

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
  }, [dispatch]);

  return (
    <Container className={classes.page}>
      <Header />
      <Router>
        <Switch>
          <Redirect exact from='/' to='/login' />
          <UserProtectedRoute exact path='/login' authRedirect='/project-select'>
            <Login />
          </UserProtectedRoute>
          <UserProtectedRoute exact path='/generator'>
            <Generator />
          </UserProtectedRoute>
          <UserProtectedRoute exact path='/project-select'>
            <ProjectSelect />
            </UserProtectedRoute>
          <Route exact path='/registration'>
            <Registration />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
