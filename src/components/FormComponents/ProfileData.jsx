import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import { theme } from "../../Theme/Theme";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  column: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    width: "67%",
  },
  spacing: {
    margin: 10,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 0,
    alignItems: "center",
    color: theme.palette.primary.main,
    transition: 'all 1s ease', 
    "&:hover": {
      backgroundColor: grey[200],
      boxShadow: '0 0 5px 5px' + grey[200]
    },
  },
  divider: {
    // background: ,
  },
}));

export default function ProjectOverview() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const user = useSelector((store) => store.user);

  const [githubId, setGithubId] = useState(user.github);
  const [linkedInId, setLinedInId] = useState(user.linkedin);
  const [email, setEmail] = useState(user.email);
  const [toggle, setToggle] = useState(false);

  const style = {
    transform: toggle ? "rotate(-180deg)" : "",
    transition: "transform 500ms ease",
  };

  return (
    <Container className={classes.column}>
      <Container>
        <Container className={classes.title} onClick={() => setToggle(!toggle)}>
          <Typography variant="h3">
            Profile Data
          </Typography>
          <ArrowCircleDownIcon style={style} fontSize="large" />
        </Container>
        <Divider />
        <Collapse in={toggle}>
          <Typography variant="body1">
            This is information stored in your user profile. In most projects it
            will be the same however there may where there may be an exception
            to that. For instance if you are writing a readme for a joint
            project that is stored in someone elses Github account you will want
            to change the Github username to their username so it generates the
            correct shields. Otherwise they will all read either "0" or "none"
            depending on which shield it is.
          </Typography>
        </Collapse>
      </Container>
      <TextField
        className={classes.spacing}
        variant="outlined"
        id="githubId"
        value={githubId}
        label="Github Username"
      />
      <TextField
        className={classes.spacing}
        variant="outlined"
        id="linkedInId"
        value={linkedInId}
        label="LinkedIn URL"
      />
      <TextField
        className={classes.spacing}
        variant="outlined"
        id="email"
        value={email}
        label="Email"
      />
    </Container>
  );
}
