import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/styles/makeStyles";
import Conclusion from "./Conclusion";
import GettingStarted from "./GettingStarted";
import LicenseList from "./LicenseList";
import ProjectOverview from "./ProjectOverview";
import Shields from "./Shields";
import TechList from "./TechList";
import ProfileData from './ProfileData';
import ProjectData from "./ProjectData";

const useStyles = makeStyles({
  formCard: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  twoColumn: {
    width: "60%",
  },
  oneColumn: {
    width: "40%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
});

export default function Form() {
  const classes = useStyles();

  return (
      <Card className={classes.formCard}>
        <ProfileData />
        <Divider className={classes.divider} />
        <ProjectData />
      </Card>
    // <Card className={classes.formCard}>
    //   <div className={classes.row}>
    //     <ProjectOverview className={classes.twoColumn} />
    //     <Shields className={classes.oneColumn} />
    //   </div>
    //   <Divider className={classes.divider} />
    //   <TechList />
    //   <Divider className={classes.divider} />
    //   <GettingStarted />
    //   <Divider className={classes.divider} />
    //   <LicenseList />
    //   <Divider className={classes.divider} />
    //   <Conclusion />
    // </Card>
  );
}
