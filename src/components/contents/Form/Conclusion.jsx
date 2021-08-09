import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  column: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  spacing: {
    padding: "10px",
  },
}));

export default function Conclusion() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [acknowledgement, setAcknowledgement] = useState("Who helped you make this project a reality? Friends? Family? Contributors? Instructors?");
  const [linkedIn, setLinkedIn] = useState("");
  const [email, setEmail] = useState("");

  const handleBlur = () => {
    const conclusionCode = `

## Acknowledgements

${acknowledgement}

## Contacts

<a href="https://www.linkedin.com/in/${linkedIn}"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:${email}"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>`;

    dispatch({ type: "SET_CONCLUSION", payload: conclusionCode });
  };

  useEffect(() => {
    handleBlur();
  }, []);

  return (
    <>
      <div className={classes.row}>
        <TextField
          className={clsx(classes.column, classes.spacing)}
          variant="outlined"
          multiline
          rows={5}
          onChange={(event) => setAcknowledgement(event.target.value)}
          onBlur={() => handleBlur()}
          label="Acknowledgements"
        />
        <div className={classes.column}>
          <TextField
            className={classes.spacing}
            variant="outlined"
            onChange={(event) => setLinkedIn(event.target.value)}
            onBlur={() => handleBlur()}
            label="LinkedIn username"
          />
          <TextField
            className={classes.spacing}
            variant="outlined"
            onChange={(event) => setEmail(event.target.value)}
            onBlur={() => handleBlur()}
            label="Email Address"
          />
        </div>
      </div>
    </>
  );
}
