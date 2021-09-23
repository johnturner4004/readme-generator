import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/styles/makeStyles";
import CodeDisplay from "../layout/CodeDisplay";
import Form from "../layout/Form";
import MDPreview from "../layout/MDPreview";
import ProjectName from '../layout/ProjectName'

const useStyles = makeStyles({
  page: {
    padding: 0,
    margin: 0,
    width: "100vw",
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

export default function Generator() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <ProjectName />
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
  );
}
