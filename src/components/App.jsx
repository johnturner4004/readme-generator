import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/styles/makeStyles";
import Header from "./layout/Header";
import Login from './layout/Login'
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Generator from "./layout/Generator";
import UserProtectedRoute from './ProtectedRoutes/UserProtectedRoute';
import Registration from './layout/Profile';

const useStyles = makeStyles({
  page: {
    padding: 0,
    margin: 0,
    width: "100vw",
    maxWidth: "100vw",
  },
  paper: {
    paddingBottom: 40,
    paddingTop: 20,
    margin: 20,
    height: "100%",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.page}>
      <Header />
      <Router>
        <Switch>
          <Redirect exact from='/' to='/login' />
          <UserProtectedRoute exact path="/login" authRedirect="/generator">
            <Login />
          </UserProtectedRoute>
          <UserProtectedRoute exact path="/generator">
            <Generator />
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
