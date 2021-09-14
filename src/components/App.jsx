import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/styles/makeStyles";
import Header from "./layout/Header";
import FormLayout from "./layout/FormLayout";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

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
            <h1>HELLO</h1>
          </Route>
          <Route exact path="/generator">
            <FormLayout />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
