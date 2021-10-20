import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/styles/makeStyles";
import { useEffect } from "react";
import LicenseList from "./FormComponents/LicenseList";
import ProfileData from "./FormComponents/ProfileData";
import ProjectData from "./FormComponents/ProjectData";
import TechList from "./FormComponents/TechList";

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

export default function Form(props) {
  const classes = useStyles();
  const file = props.file

  useEffect(() => {
    localStorage.setItem('project_name', file.project_name)
  }, [])

  return (
    <Card className={classes.formCard}>
      <Container className={classes.oneColumn}>
        {file ? <ProfileData file={file} /> : ''}
        <Divider className={classes.divider} />
        {file ? <ProjectData file={file} /> : ''}
      </Container>
      <Divider orientation='vertical' variant='fullWidth' flexItem />
      <Container className={classes.twoColumn}>
        {file ? <TechList file={file} /> : ''}
        <Divider />
        {file ? <LicenseList file={file} /> : ''}
      </Container>
    </Card>
  );
}
