import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/styles/makeStyles";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import rehypeRaw from 'rehype-raw';
import MarkdownCode from "./MarkdownCode";

const useStyles = makeStyles({
  previewCard: {
    padding: 10,
    margin: 10,
    height: "100%",
  },
});

export default function MDPreview() {
  const classes = useStyles();

  return (
    <Card className={classes.previewCard}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {MarkdownCode()}
      </ReactMarkdown>
    </Card>
  );
}