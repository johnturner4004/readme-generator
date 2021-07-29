import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles({
  previewCard: {
    padding: 10,
    margin: 10,
    height: "100%",
  },
});


export default function MDPreview() {
  const classes = useStyles();
  const textInput = useSelector(store => store.textInput);

  return (
    <Card className={classes.previewCard}>
      <ReactMarkdown>
        {textInput.code}
      </ReactMarkdown>
    </Card>
  );
}