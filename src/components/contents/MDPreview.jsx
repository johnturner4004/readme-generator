import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/styles/makeStyles";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import rehypeRaw from 'rehype-raw';

const useStyles = makeStyles({
  previewCard: {
    padding: 10,
    margin: 10,
    height: "100%",
  },
});

export default function MDPreview() {
  const classes = useStyles();
  const store = useSelector(store => store);

  return (
    <Card className={classes.previewCard}>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {store.shieldCode}
      </ReactMarkdown>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {store.overviewCode}
      </ReactMarkdown>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {store.iconList}
      </ReactMarkdown>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {store.gettingStartedCode}
      </ReactMarkdown>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {store.licenseCode}
      </ReactMarkdown>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {store.conclusionCode}
      </ReactMarkdown>
    </Card>
  );
}