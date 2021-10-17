import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import MarkdownCode from './MarkdownCode';

const useStyles = makeStyles({
  codeCard: {
    padding: 10,
    margin: 10,
    height: '100%',
    backgroundColor: '#1D1F21',
    fontSize: '0.6em',
  },
});

export default function CodeDisplay(props) {
  const classes = useStyles();
  const file = props.file;

  return(
    <Card className={classes.codeCard}>
      <SyntaxHighlighter
      wrapLongLines={true}
      language="markdown"
      style={atomDark}
      >
{MarkdownCode(file)}
      </SyntaxHighlighter>
    </Card>
  )
}