import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/styles/makeStyles";
import LicenseList from "./LicenseList";
import TechList from "./TechList";
import ProfileData from "./FormComponents/ProfileData";
import ProjectData from "./FormComponents/ProjectData";
import Container from "@material-ui/core/Container";
import ProjectName from "./ProjectName";

const useStyles = makeStyles({
  formCard: {
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  twoColumn: {
    width: "60%",
    padding: 0,
    margin: 0,
  },
  oneColumn: {
    width: "40%",
    padding: 0,
    margin: 0,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-start',
  },
});

export default function Form() {
  const classes = useStyles();

  return (
    <Card className={classes.formCard}>
      <Container className={classes.oneColumn}>
        <ProfileData />
        <Divider className={classes.divider} />
        <ProjectData />
      </Container>
      <Divider orientation='vertical' variant='fullWidth' flexItem />
      <Container className={classes.twoColumn}>
        <TechList />
        <Divider />
        <LicenseList />
      </Container>
    </Card>
  );
}
