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
  gridContainer: {
    padding: 10,
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
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/generator">
            <Generator />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
