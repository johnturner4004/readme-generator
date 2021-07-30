import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/styles/makeStyles'
import CodeDisplay from './contents/CodeDisplay'
import Form from './contents/Form/Form'
import MDPreview from './contents/MDPreview'
import Header from './layout/Header'

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
  gridContainer: {
    padding: 10,
  },
})


function App() {
  const classes = useStyles()
  
  return (
    <Container className={classes.page}>
      <Header />
      <Paper className={classes.paper}>
        <Form />
        <Grid container className={classes.gridContainer} direction="row">
          <Grid item xs={12} sm={6}>
            <CodeDisplay />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MDPreview />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
