import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/styles/makeStyles'
import Paper from '@material-ui/core/Paper'
import Form from './contents/form'
import Header from './layout/Header'

const useStyles = makeStyles({
  page: {
    padding: 0,
    margin: 0,
    width: '100vw',
    maxWidth: '100vw',
  },
  paper: {
    padding: 10,
    margin: 20,
  },
})


function App() {
  const classes = useStyles()
  
  return (
    <Container className={classes.page}>
      <Header />
      <Paper className={classes.paper}>
        <Form />
      </Paper>
    </Container>
  );
}

export default App;
