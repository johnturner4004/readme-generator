import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/styles/makeStyles";
import ProfileData from "./FormComponents/ProfileData";
import ProjectData from "./FormComponents/ProjectData";
import LicenseList from "./FormComponents/LicenseList";
import TechList from "./FormComponents/TechList";
import { useParams } from 'react-router';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const dispatch = useDispatch();
  const pathIn = useParams();
  const pathId = Number(pathIn.id);

  const file = useSelector(store => store.readme.selected[0]);

  useEffect(() => {
    const checkId = (id) => {
      id = Number(id);
      if (id) {
        dispatch({ type: 'FETCH_SELECTED_FILE', payload: { id: id } });
      } 
    };
    checkId(Number(pathId) !== 0 ? Number(pathId) : '');
  }, [pathId, dispatch]);

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
        <LicenseList />
      </Container>
    </Card>
  );
}
